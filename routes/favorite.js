import { removeFavoriteDB, addFavoriteDB, getFavoriteDB, getTeamIdDB, getTeamsDB} from "../database/database.js";
import { removeFavoriteSQL, addFavoriteSQL, getFavoriteSQL, getTeamIdSQL, getTeamsSQL} from "../utils/sql.js";
import express from 'express';

const router = express.Router();

router.post('/remove', async (req, res) => {
 
    const user = req.body;
    const query = removeFavoriteSQL();
    const user_data = Object.values(user);

    try {
        const result = await removeFavoriteDB(query, user_data);
        res.status(200).json(result);
    } catch(err) {
        res.status(500).json(err.message)
    }
});

router.post('/add', async (req, res) => {
 
    const query = addFavoriteSQL();
    const user = req.body;
    const data = Object.values(user);

    console.log('Query:', query)
    console.log('User:', user)

    try {
        const result = await addFavoriteDB(query, data);
        res.status(200).json(result);
    } catch(err) {
        res.status(500).json(err.message)
    }
});

router.get('/id', async (req, res) => {

    const team = req.query.team;
    const query = getTeamIdSQL();

    console.log("Team: ", team)
    console.log("Query: ", query)

    try {
        const result = await getTeamIdDB(query, team);
        console.log("Result: ", result)
        res.status(200).json(result);
    } catch(err) {
        res.status(500).json(err.message)
    }

});



router.get('/teams', async (req, res) => {

    const query = getTeamsSQL();

    try {
        const result = await getTeamsDB(query, []);
        res.status(200).json(result);
    } catch(err) {
        res.status(500).json(err.message)
    }

});


router.get('/', async (req, res) => {

    const username = req.query.username;
    const query = getFavoriteSQL();

    try {
        const result = await getFavoriteDB(query, [username]);
        res.status(200).json(result);
    } catch(err) {
        res.status(500).json(err.message)
    }

});



export default router;

