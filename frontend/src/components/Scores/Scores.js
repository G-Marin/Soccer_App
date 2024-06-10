import "./Scores.css"
import React from 'react';
import {Container, Dropdown, FormControl} from 'react-bootstrap';
import { useEffect, useState } from "react";
import axios from 'axios';


function Scores() {


	const [scorers, setScorers] = useState([]);
	const [league, setLeague] = useState(140);
	const [season, setSeason] = useState('2023');
	const [leaguesList, setLeaguesList] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {

        const fetchLeagues = async () => {
            try {
                const response = await axios.get('/api/leagues', {
                    params: {},
                 
                });
                setLeaguesList(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchLeagues();
    }, []);

    useEffect(() => {
		
		const fetchScorers = async (league, season) => {
			axios.get('api/topscorers', {
				params: {
				season: season,
				league: league,
				},
				})
				.then(response => {
				setScorers(response.data);
				})
				.catch(err => {
				console.log(err);
				});
		};
		

        fetchScorers(league, season);
    }, [league, season]);


	const handleLeagueSelect = (league) => {
        setLeague(league);
    };

	const handleSeasonSelect = (season) => {
        setSeason(season);
    };

    const filteredLeagues = leaguesList.filter((league) =>
        league.league.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

	const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };



	return (

		
		<Container>

    		<h1 className = "text-center text-white mt-5 mb-5"> Top Scorers </h1>

			<div className = "row selection">


				<div className = "col-2">
					<Dropdown  size = "sm">
						<Dropdown.Toggle variant="primary" id="dropdown-basic" className = "w-100">

						{season}
					
						</Dropdown.Toggle>
						<Dropdown.Menu >
                       
                            <Dropdown.Item onClick={() => handleSeasonSelect('2024')}>2024</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSeasonSelect('2023')}>2023</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSeasonSelect('2022')}>2022</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSeasonSelect('2021')}>2021</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSeasonSelect('2020')}>2020</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSeasonSelect('2019')}>2019</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSeasonSelect('2018')}>2018</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSeasonSelect('2017')}>2017</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSeasonSelect('2016')}>2016</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSeasonSelect('2015')}>2015</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSeasonSelect('2014')}>2014</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSeasonSelect('2013')}>2013</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSeasonSelect('2012')}>2012</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSeasonSelect('2011')}>2011</Dropdown.Item>
                            
                    </Dropdown.Menu>
					</Dropdown>
				</div>
  
				<div className = "col dropdown-form">
					<Dropdown className="white" size = "sm">
						<Dropdown.Toggle variant="warning" id="dropdown-basic"  className = "w-100" >

						Select League/Competition
					
						</Dropdown.Toggle>
						<Dropdown.Menu className="w-100">
							<FormControl
								autoFocus
								className=""
								placeholder="Search for a league"
								onChange={handleSearch}
                            	value={searchQuery}
							/>
							
							{filteredLeagues.map((league) => (
                                <Dropdown.Item key={league.league.id} onClick={() => handleLeagueSelect(league.league.id)}>
                                    <img src={league.league.logo} alt={league.league.name}  />
                                    {league.league.name}
                                </Dropdown.Item>
                            ))}
						</Dropdown.Menu>
					</Dropdown>
				</div>


        	</div>


			<div className = "fixtures-box overflow-auto">
                <div className="header-box p-5">
                    <div className="league-logo">
                        <img src={`https://media.api-sports.io/football/leagues/${league}.png`} alt="League Logo" />
                    </div>
                </div>
	
					{scorers.map((scorer, index) => (
                            <div className="row h-25 p-3" key={index}>
                                <div className="col-2">
                                    <div className="picture">
                                        <img src={scorer.player.photo} alt={scorer.player.name}></img>
                                    </div>
                                </div>
                                <div className="col-2 player-name">
                                    <div className="text-black fw-bold ">
                                        {scorer.player.name}
                                    </div>
                                    <pre>
                                        <div className="text-black mt-4">Age: {scorer.player.age}</div>
                                        <div className="text-black ">Goals: {scorer.statistics[0].goals.total}</div>
                                        <div className="text-black ">Assists: {scorer.statistics[0].goals.assists}</div>
                                    </pre>
                                </div>
                                <div className="col-2">
                                    <div className="text-black fw-bold ">Attributes</div>
                                    <pre>
                                        <div className="text-black  mt-4">Position: {scorer.statistics[0].games.position}</div>
                                        <div className="text-black ">Height: {scorer.player.height}</div>
                                        <div className="text-black ">Weight: {scorer.player.weight}</div>
                                    </pre>
                                </div>
                                <div className="col-2">
                                    <div className="text-black fw-bold ">Statistics</div>
                                    <pre>
                                        <div className="text-black  mt-4">Appearances: {scorer.statistics[0].games.appearences}</div>
                                        <div className="text-black ">Minutes Played: {scorer.statistics[0].games.minutes}</div>
                                        <div className="text-black ">Nationality: {scorer.player.nationality}</div>
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
				
				

				

			</div>

		</Container>
				
  	);
}


export default Scores;