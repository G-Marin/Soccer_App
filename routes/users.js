import express from 'express';
import { addUserSQL, getFavoriteSQL } from '../utils/sql.js';
import { addUserDB } from '../database/database.js';
import { getFavoriteDB } from '../database/database.js';
import { hashPassword, authenticateUser} from '../utils/authentication.js';


const router = express.Router();

router.post('/login', async (req, res) => {

    const { username, password } = req.body;
    
    const authenticated = await authenticateUser(username, password);

    const query = getFavoriteSQL();
    const favoriteTeam = await getFavoriteDB(query, [username]);

    console.log("Favorite team:", favoriteTeam)

    console.log("Authenticated:", authenticated)

    if (authenticated) {
    
        res.cookie('favorite_team', favoriteTeam, { maxAge: 900000, httpOnly: true })
    
        res.cookie('logged_in', true, { maxAge: 900000, httpOnly: true })

        res.status(200).json({ message: 'Login successful' });
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

    console.log('Query:', query)
    console.log('User:', user)

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

    console.log('Query:', query)
    console.log('User:', user)

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

    console.log('Query:', query)
    console.log('User:', user)

    try {
        const result = await addUserDB(query, user_data);
        res.status(200).json(result);
    } catch(err) {
        res.status(500).json(err.message)
    }
});

export default router;
