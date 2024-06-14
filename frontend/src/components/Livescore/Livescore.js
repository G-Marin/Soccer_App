import "./Livescore.css";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Dropdown, Container, FormControl,Button} from 'react-bootstrap';



const Scoreboard = () => {
    
	const [searchQuery, setSearchQuery] = useState('');
    const [league, setLeague] = useState(140);
	const [time, setTime] = useState('past');
    const [fixtures, setFixtures] = useState([]);
    const [season, setSeason] = useState('2023');
    const [leaguesList, setLeaguesList] = useState([]);
    
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

        const fetchFixtures = async (league, time) => {

            try {
                const response = await axios.get('/api/fixtures', {
                    params: {
                        league: league,
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
        setLeague(league);
    };

    const filteredLeagues = leaguesList.filter((league) =>
        league.league.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

	const handleTime = (time) => {
        setTime(time);
    };


	return (

		<Container className = "mt-5">


        <h1 className = "text-center text-white mt-5 mb-5"> Live Scores</h1>

        <div className = "row selection">

            <div className = "col-1">

                <Button className = "w-100 h-100" variant="primary" onClick={() => handleTime("current")}>
                    Today
                </Button>
        
            </div>

            <div className = "col-2">

            <Button className = "w-100 h-100"  variant="success" onClick={() => handleTime("scheduled")}>
                Upcoming
            </Button>

            </div>

            <div className = "col-1 ">


            <Button className = "w-100 h-100" variant="dark" onClick={() => handleTime("past")}>
                Past 
            </Button>

            </div>

       


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


                    
				    {league}
                
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">

                    <FormControl
                            autoFocus
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

