import express from 'express';
import { addUserSQL, getFavoriteSQL, getUserIdSQL } from '../utils/sql.js';
import { addUserDB, getUserIdDB } from '../database/database.js';
import { getFavoriteDB } from '../database/database.js';
import { hashPassword, authenticateUser} from '../utils/authentication.js';


const router = express.Router();

router.post('/login', async (req, res) => {

    const { username, password } = req.body;
    
    const authenticated = await authenticateUser(username, password);

    const query = getFavoriteSQL();
    const favoriteTeam = await getFavoriteDB(query, [username]);


    if (authenticated) {
    
        res.cookie('username', username, { httpOnly: false });
        res.cookie('favorite_team', favoriteTeam, { httpOnly: false });

        res.status(200).json();

    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

router.post('/add', async (req, res) => {
    const user = req.body;
    const query = addUserSQL(user);

    // Hash and salt user password
    const hashedPassword = await hashPassword(user.password);
 
    user.password = hashedPassword;

    const user_data = Object.values(user);

    try {
        const result = await addUserDB(query, user_data);
        res.status(200).json(result);
    } catch(err) {
        res.status(500).json(err.message)
    }

});

router.post('/remove', async  (req, res) => {
    const user = req.body;
    const query = addUserSQL(user);
    const user_data = Object.values(user);


    try {
        const result = await addUserDB(query, user_data);
        res.status(200).json(result);
    } catch(err) {
        res.status(500).json(err.message)
    }
});

router.post('/update', async (req, res) => {
    const user = req.body;
    const query = addUserSQL(user);
    const user_data = Object.values(user);

    try {
        const result = await addUserDB(query, user_data);
        res.status(200).json(result);
    } catch(err) {
        res.status(500).json(err.message)
    }
});

router.get('/id', async (req, res) => {

    const user = req.query.username;
    const query = getUserIdSQL();
  

    try {
        const result = await getUserIdDB(query, user);
        console.log('Result: Here', result)
        res.status(200).json(result);
    } catch(err) {
        res.status(500).json(err.message)
    }
});

router.get('/status', (req, res) => {

    if (req.cookies.username) {
        res.status(200).json({ status: 'authenticated' });
    }
    else {
        res.status(401).json({ status: 'unauthenticated' });
    }
    }
);

router.get('/data', (req, res) => {

    username = req.cookies.username;
    favorite_team = req.cookies.favorite_team;

    res.status(200).json({ username: username, favorite_team: favorite_team });
});

router.post('/logout', (req, res) => {
    res.clearCookie('username');
    res.clearCookie('favorite_team');
    res.status(200).json();
});



export default router;
