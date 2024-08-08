import React from 'react';
import { Button } from 'react-bootstrap';
import './NewsArticle.css';

const NewsArticle = ({ article }) => {
    return (
        <div className="col-md-3 col-sm-6 article">
            <div className="news-title mt-3 fw-bold">{article.title}</div>
            <div className="news-image mt-5">
                <img src={article.urlToImage} alt={article.title} />
            </div>
            <div className="news-source">{article.source.name}</div>
            <div className="news-description mt-5">{article.description}</div>
            <div className="news-button mt-5">
                <Button href={article.url}>Source</Button>
            </div>
        </div>
    );
};

export default NewsArticle;
