import express from 'express';
import { addUserSQL, getFavoriteSQL, getUserIdSQL } from '../utils/sql.js';
import { addUserDB, getUserIdDB, getFavoriteDB } from '../database/database.js';
import { hashPassword, authenticateUser } from '../utils/authentication.js';

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const authenticated = await authenticateUser(username, password);

        console.log('Authenticated: ', authenticated);

        if (!authenticated) {
            console.log('Invalid username or password');

            res.status(401).json({ message: 'Invalid username or password' });
        } else {
            const query = getFavoriteSQL();
            const favoriteTeam = await getFavoriteDB(query, [username]);

            res.cookie('username', username, { httpOnly: false });
            res.cookie('favorite_team', favoriteTeam, { httpOnly: false });
            res.status(200).json();
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.post('/add', async (req, res) => {
    const user = req.body;
    const query = addUserSQL(user);

    try {
        // Hash and salt user password
        const hashedPassword = await hashPassword(user.password);

        user.password = hashedPassword;
        const user_data = Object.values(user);
        const result = await addUserDB(query, user_data);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            message: 'Error adding user',
            error: err.message,
        });
    }
});

router.post('/remove', async (req, res) => {
    const user = req.body;
    const query = addUserSQL(user);
    const user_data = Object.values(user);

    try {
        const result = await addUserDB(query, user_data);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            message: 'Error removing user',
            err: err.message,
        });
    }
});

router.post('/update', async (req, res) => {
    const user = req.body;
    const query = addUserSQL(user);
    const user_data = Object.values(user);

    try {
        const result = await addUserDB(query, user_data);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            message: 'Error updating user',
            err: err.message,
        });
    }
});

router.get('/id', async (req, res) => {
    const user = req.query.username;
    const query = getUserIdSQL();

    try {
        const result = await getUserIdDB(query, user);
        console.log('Result: Here', result);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            message: 'Error getting user id',
            err: err.message,
        });
    }
});

router.get('/status', (req, res) => {
    if (req.cookies.username) {
        res.status(200).json({ status: 'authenticated' });
    } else {
        res.status(401).json({ status: 'unauthenticated' });
    }
});

router.get('/data', (req, res) => {
    const username = req.cookies.username;
    const favorite_team = req.cookies.favorite_team;

    res.status(200).json({ username: username, favorite_team: favorite_team });
});

router.post('/logout', (req, res) => {
    res.clearCookie('username');
    res.clearCookie('favorite_team');
    res.status(200).json();
});

export default router;
