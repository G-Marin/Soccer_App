import "../News.css"
import React, { useEffect, useState, useContext } from 'react';
import { Container, Button} from 'react-bootstrap';
import { AuthContext } from "../../../context/authcontext";

import axios from 'axios';

const News = () => {

	const [news, setNews] = useState([]);
	const {isLoggedIn} = useContext(AuthContext);



	useEffect(() => {

        const getNews = async () => {

        try {
            const response = await axios.get('/getNews', {
                params: {}
            });

            console.log(response.data);

            setNews(response.data);
        } catch (err) {
            console.log(err);
        }

        };

		if(isLoggedIn) {
			getNews();
		}

	}, [isLoggedIn]);

	return (


		<Container fluid align = "center">

			<h1 className = "text-center text-white mt-5 mb-3"> News</h1>


			{news.length == 0 ? (<h4 className = "text-white"> Login to see your favorite news </h4>) : <>(



				<div className = "row article-container flex-nowrap overflow-auto" >

				{news.map((article, index) => (
				<div key={index} className = "col-3 article">

					<div className = "news-title mt-3 fw-bold">
					{article.title}
					</div>

					<div className = "news-image mt-5">
					<img src={article.urlToImage} alt={article.title} />
					</div>

					<div className = "news-source">
						{article.source.name}
					</div>

					<div className = "news-description mt-5">
						{article.description}
					</div>

					<div className = "news-button mt-5">
						<Button href={article.url}>Source</Button>
					</div>

				</div>
					))}

				</div>

			)</>};


		</Container>	
  );
};

export default News;