import express from 'express';
const router = express.Router();
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();


// Returns fixures given a league and season 
router.get('/fixtures', async (req, res) => {

   
    const time = req.query.time;
    const league = req.query.league;
    const season = req.query.season;

    

    let params = {
        league: league,
        season: season,
    };
    
    if(time === 'current') {
        params.date = time;
    } else if(time === 'scheduled') {
        params.next = 20;
    }
    else if(time === 'past') {
        params.last = 20;
    }

    console.log("Fetching Fixtures")

    
    try {
        const response = await axios.get('https://v3.football.api-sports.io/fixtures', {
            
            params: params,
            headers: {
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-rapidapi-key': process.env.API_KEY,
            }
        });

        console.log("Fixtures Fetched")

        res.status(200).json(response.data.response);
    } catch (err) {
        res.status(500).json(err.message)
    }

});



// Returns leagues/competitions given a season 
router.get('/leagues', async (req, res) => {

    
        try {
            const response = await axios.get('https://v3.football.api-sports.io/leagues', {
                params: {
                    "season ": "2023",
                },
                headers: {
                    'x-rapidapi-host': 'v3.football.api-sports.io',
                    'x-rapidapi-key': process.env.API_KEY,
                }
            });
            
           
            res.status(200).json(response.data.response);
        } catch (err) {
            res.status(500).json(err.message)
        }
   
});


// Returns standings given a season and league
router.get('/standings', async (req, res) => {

    const season = req.query.season;
    const league = req.query.league;

    try {
        const response = await axios.get('https://v3.football.api-sports.io/standings', {
            params: {
                season: season,
                league: league,
            },
            headers: {
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-rapidapi-key': process.env.API_KEY,
            }
        });
        
        res.status(200).json(response.data.response[0].league.standings);


    } catch (err) {
        res.status(500).json(err.message)
    }


});

// Returns top scorers given a season and league
router.get('/scorers', async (req, res) => {

    const season = req.query.season;
    const league = req.query.league;

    try {
        const response = await axios.get('https://v3.football.api-sports.io/players/topscorers', {
            params: {
                season: season,
                league: league,
            },
            headers: {
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-rapidapi-key': process.env.API_KEY,
            }
        });


        console.log(response.data.response)

        res.status(200).json(response.data.response);
    } catch (err) {
        res.status(500).json(err.message)
    }


});


// Returns all teams in DB
router.get('/teams', async (req, res) => {

    try {
        const response = await axios.get('https://v3.football.api-sports.io/players/teams', {
            params: {},
            headers: {
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-rapidapi-key': process.env.API_KEY,
            }
        });
        res.status(200).json(response.data.response);
    } catch (err) {
        res.status(500).json(err.message)
    }


});

export default router;