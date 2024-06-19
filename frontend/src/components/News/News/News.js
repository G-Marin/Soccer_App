import './News.css';
import React, { useEffect, useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { AuthContext } from "../../utils/authcontext";
import axios from 'axios';
import NewsArticle from './NewsArticle';

const News = () => {
  const [news, setNews] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get('/getNews', { params: {} });
        setNews(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (isLoggedIn) {
      getNews();
    }
  }, [isLoggedIn]);

  return (
    <Container fluid>
      <h1 className="text-center text-white mt-5 mb-3">News</h1>
      {news.length === 0 ? (
        <h4 className="text-white">Login to see your favorite news</h4>
      ) : (
        <div className="row article-container">
          {news.map((article, index) => (
            <NewsArticle key={index} article={article} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default News;
