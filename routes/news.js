import { getNewsQuery } from '../sql.js';
import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config();

router.get('/', async (req, res) => {

    console.log("Getting news")

    const team = req.cookies.favorite_team.team_name;

    console.log("Team: ", team)

    if (!team) {
        return res.status(400).json({ message: 'No favorite team found in cookies' });
    }
    
    const query = getNewsQuery()


    try {
        const response = await axios.get(query, {
            params: {
                "apiKey": process.env.NEWS_API_KEY,
                "sortBy": "publishedAt",
                "sources": "espn",
                "searchIn": "title",
                "q": team
            },
            headers: {}
        });
        
        let news = [];
        let article = {};

        
        for(let i = 0; i < 10; i++) {
        
            article = {
                "title": response.data.articles[i].title,
                "description": response.data.articles[i].description,
                "url": response.data.articles[i].url,
                "urlToImage": response.data.articles[i].urlToImage,
            }
            news.push(article);
        }

        console.log(news)

        res.status(200).json(news);
       
    }   catch (err) {
        console.error('Error getting data:', error);
    }

});

export default router;

