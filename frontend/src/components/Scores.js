import "./Scores.css"
import React from 'react';
import {Container, Dropdown} from 'react-bootstrap';
import { useEffect, useState } from "react";
import axios from 'axios';


function Scores() {

	const [id, setId] = useState(140);
	const [scorers, setScorers] = useState([]);

	useEffect(() => {
		
		const fetchScorers = async (id) => {
			axios.get('https://v3.football.api-sports.io/players/topscorers', {
				params: {
				season: '2023',
				league: id,
				},
				headers: {
					'x-rapidapi-host': 'v3.football.api-sports.io',
					'x-rapidapi-key': '6d1c1eae83a98e627d2fd7b059c9ef03'
				}
				})
				.then(response => {
				setScorers(response.data.response);
				})
				.catch(err => {
				console.log(err);
				});
		};
		

        fetchScorers(id);
    }, [id]);

	const handleId = (id) => {
		setId(id);
	}

	return (

		<div className="Home">
      

    			<h1 className = "text-center text-white mt-5 mb-5"> Top Scorers </h1>

				<div className = "dropdown-box">
					<Dropdown className="btn league" drop = "down-centered">
          				<Dropdown.Toggle id="dropdown-league" className="rounded-pill league-button ">
            				League
          				</Dropdown.Toggle>
          				<Dropdown.Menu className = "w-100">
						  <Dropdown.Item onClick={() => handleId('140')}>La Liga</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleId('78')}>Bundesliga</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleId('39')}>Premier League</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleId('262')}>Liga MX</Dropdown.Item>
          				</Dropdown.Menu>
        			</Dropdown>
				
        		<Dropdown className="btn competition">
          			<Dropdown.Toggle id="dropdown-competition" className = "rounded-pill competition-button">
            		Competition
          			</Dropdown.Toggle>
          			<Dropdown.Menu className = "w-100">
            			<Dropdown.Item href="#/action-1">Competition 1</Dropdown.Item>
           			 	<Dropdown.Item href="#/action-2">Competition 2</Dropdown.Item>
            			<Dropdown.Item href="#/action-3">Competition 3</Dropdown.Item>
          			</Dropdown.Menu>
        		</Dropdown>

			</div>


				<div className = "outerBox">
	
					<div className = "innerBox">

					<Container fluid className = "overflow-auto">
					{scorers.map((scorer, index) => (
                            <div className="row h-25 p-3" key={index}>
                                <div className="col-2">
                                    <div className="picture">
                                        <img src={scorer.player.photo} alt={scorer.player.name}></img>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="text-black fw-bold h2">
                                        {scorer.player.name}
                                    </div>
                                    <pre>
                                        <div className="text-black h4 mt-4">Age: {scorer.player.age}</div>
                                        <div className="text-black h4">Goals: {scorer.statistics[0].goals.total}</div>
                                        <div className="text-black h4">Assists: {scorer.statistics[0].goals.assists}</div>
                                    </pre>
                                </div>
                                <div className="col-2">
                                    <div className="text-black fw-bold h2">Attributes</div>
                                    <pre>
                                        <div className="text-black h4 mt-4">Position: {scorer.statistics[0].games.position}</div>
                                        <div className="text-black h4">Height: {scorer.player.height}</div>
                                        <div className="text-black h4">Weight: {scorer.player.weight}</div>
                                    </pre>
                                </div>
                                <div className="col-2">
                                    <div className="text-black fw-bold h2">Statistics</div>
                                    <pre>
                                        <div className="text-black h4 mt-4">Appearances: {scorer.statistics[0].games.appearences}</div>
                                        <div className="text-black h4">Minutes Played: {scorer.statistics[0].games.minutes}</div>
                                        <div className="text-black h4">Nationality: {scorer.player.nationality}</div>
                                    </pre>
                                </div>
                                <div className="col team">
                                    <img src={scorer.statistics[0].team.logo} alt={scorer.statistics[0].team.name}></img>
                                </div>
                                <div className="col flag">
                                    <img src={scorer.statistics[0].league.logo} alt={scorer.statistics[0].team.name}></img>
                                </div>
                            </div>
                        ))}
				
					</Container>

				</div>

				</div>
			
    	</div>
  	);
}


export default Scores;