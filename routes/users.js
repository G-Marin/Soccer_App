import express from 'express';
import { addUserSQL } from '../sql.js';
import { addUserDB } from '../database.js';

const router = express.Router();

router.post('/add', async (req, res) => {
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

router.post('/remove', async (req, res) => {
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
