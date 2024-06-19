import "./Livescore.css";
import axios from "axios";
import React, { useEffect, useState, useContext} from 'react';
import { Dropdown, Container, FormControl,Button} from 'react-bootstrap';
import { LeagueContext } from '../../utils/leaguecontext.js';
import Selection from '../Content/Selection.js';



const Scoreboard = () => {
    
	const [searchQuery, setSearchQuery] = useState('');
    const [league, setLeague] = useState({id: 140, name: 'La Liga'});
	const [time, setTime] = useState('past');
    const [fixtures, setFixtures] = useState([]);
    const [season, setSeason] = useState('2023');
    const {leaguesList} = useContext(LeagueContext);


    useEffect(() => {

        const fetchFixtures = async (league, time) => {

            try {
                const response = await axios.get('/api/fixtures', {
                    params: {
                        league: league.id,
                        season: season,
                        time: time,
                    },
                });
                
                setFixtures(response.data);

            } catch (err) {
                console.log(err);
            }
        };


        fetchFixtures(league, time);
    }, [league, time, season]);


	const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSeasonSelect = (season) => {
        setSeason(season);
    };

    const handleLeagueSelect = (league) => {
        setLeague({id: league.id, name: league.name});
    };

    const filteredLeagues = leaguesList.filter((league) =>
        league.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

	const handleTime = (time) => {
        setTime(time);
    };


	return (

		<Container className = "mt-5">


            <Selection expanded = {true} />


			<div className = "fixtures-box overflow-auto">		
				<div className="header-box p-5">
                    <div className="league-logo">
                        <img src={`https://media.api-sports.io/football/leagues/${league.id}.png`} alt="League Logo" />
                    </div>
                </div>
                
				<div className="row p-3 fw-bold fixture-labels" align="center">
                    <div className="col-1">Home</div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
					<div className="col-1">Away</div>
					<div className="col-2">Date</div>
					<div className="col-2">Stadium</div>
					<div className="col-2">Referee</div>
                    <div className = "col-1"> Status</div>
                    <div className="col-1">Statistics</div>
                </div>

                {fixtures.map((match) => (
                             
                    <div key = {match.fixture.id} className="row p-3 fw-bold fixture-labels" align = "center">
                    
                        <div className="col-1">	
					        <div className = "fixture-teams">
                                <img src = {match.teams.home.logo}></img>
					        </div> 
					    </div>

                        <div className="col-1 h4"> {match.goals.home}</div>
                        <div className="col-1 h4"> {match.goals.away} </div>
                    
                        <div className="col-1">	
                            <div className = "fixture-teams">
                            <img src = {match.teams.away.logo}></img>
					        </div> 
                        </div>
					    
					    <div className="col-2">{match.fixture.date}</div>

					    <div className="col-2">{match.fixture.venue.name}</div>
					    <div className="col-2">{match.fixture.referee}</div>
                        <div className = "col 1">{match.fixture.status.short}</div>
                        <div className = "col 1"> 
                    
                            <Button variant="success" size = "sm" onClick={handleTime}>
                            Stats
                            </Button>
                        </div>

                 
                    </div>
                
                    ))
                }

			</div>

		</Container>
	)




}

export default Scoreboard;

