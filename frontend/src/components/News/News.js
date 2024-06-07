import "./News.css"
import React, { useState} from 'react';
import { Container, Button} from 'react-bootstrap';
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


		<Container fluid align = "center">
		      
			  <h1 className = "text-center text-white mt-5 mb-3"> News</h1>

			  <h4 className = "text-white"> News about your favorite team! </h4>

			<div className = "row article-container flex-nowrap overflow-auto">

				

			<div className = "col-3 article">
					
					<div className = "news-image mt-5">

					</div>

					<div className = "news-title h2 mt-3 fw-bold">

						Hansi Flick to replace Xavi Hernandez

					</div>

					<div className = "source">

						ESPN

					</div>

					<div className = "news-button mt-5">

						<Button variant = "danger" className>

							Source 

						</Button>


					</div>

				</div>

				<div className = "col-3 article">
					
					<div className = "news-image mt-5">

					</div>

					<div className = "news-title h2 mt-3 fw-bold">

						Hansi Flick to replace Xavi Hernandez

					</div>

					<div className = "source">

						ESPN

					</div>

					<div className = "news-button mt-5">

						<Button variant = "danger" className>

							Source 

						</Button>


					</div>

				</div>

				<div className = "col-3 article">
					
					<div className = "news-image mt-5">

					</div>

					<div className = "news-title h2 mt-3 fw-bold">

						Hansi Flick to replace Xavi Hernandez

					</div>

					<div className = "source">

						ESPN

					</div>

					<div className = "news-button mt-5">

						<Button variant = "danger" className>

							Source 

						</Button>


					</div>

				</div>

				<div className = "col-3 article">
					
					<div className = "news-image mt-5">

					</div>

					<div className = "news-title h2 mt-3 fw-bold">

						Hansi Flick to replace Xavi Hernandez

					</div>

					<div className = "source">

						ESPN

					</div>

					<div className = "news-button mt-5">

						<Button variant = "danger" className>

							Source 

						</Button>


					</div>

				</div>

				<div className = "col-3 article">
					
					<div className = "news-image mt-5">

					</div>

					<div className = "news-title h2 mt-3 fw-bold">

						Hansi Flick to replace Xavi Hernandez

					</div>

					<div className = "source">

						ESPN

					</div>

					<div className = "news-button mt-5">

						<Button variant = "danger" className>

							Source 

						</Button>


					</div>

				</div>

				<div className = "col-3 article">
					
					<div className = "news-image mt-5">

					</div>

					<div className = "news-title h2 mt-3 fw-bold">

						Hansi Flick to replace Xavi Hernandez

					</div>

					<div className = "source">

						ESPN

					</div>

					<div className = "news-button mt-5">

						<Button variant = "danger" className>

							Source 

						</Button>


					</div>

				</div>
			
		
			</div>


      	<button onClick={getNews}>Get News</button>

      	{news.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            <img src={article.urlToImage} alt={article.title} style={{ 	width: '200px' }} />
          	</div>
        		))}
    		


		
		</Container>	
  );
};

export default News;
