import { getNewsQuery } from '../sql.js';
import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {

    console.log("Getting news")

    const team = req.query.team;

    const query = getNewsQuery(team);
    
    axios.get(query, {
        headers: {
        'Content-Type': 'application/json',
        }
    })
    .then(response => {

    console.log("Got news")

    console.log(response.data.articles[0].title)

    let news = [];
    let article = {};
    

    for(let i = 0; i < 20; i++) {
        
        article = {
            "title": response.data.articles[i].title,
            "description": response.data.articles[i].description,
            "url": response.data.articles[i].url,
            "urlToImage": response.data.articles[i].urlToImage,
        }

        news.push(article);
    }

    res.status(200).json(news);
    })
    .catch(error => {
        console.error('Error getting data:', error);
    
    });
    
});

export default router;

