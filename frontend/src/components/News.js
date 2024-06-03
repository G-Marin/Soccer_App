import React, { useState} from 'react';
import axios from 'axios';

const News = () => {

  const [news, setNews] = useState([]);

        const getNews = async () => {

          console.log("Get News")

        try {
            const response = await axios.get('/news', {
                params: {}
            });

            console.log(response.data);

            setNews(response.data);
        } catch (err) {
            console.log(err);
        }

        };

  return (
    <div>
      
      <h1>Fetch News</h1>

      <button onClick={getNews}>Get News</button>

      {news.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            <img src={article.urlToImage} alt={article.title} style={{ width: '200px' }} />
          </div>
        ))}
    </div>
  );
};

export default News;
