import "./Livescore.css";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Dropdown, Container, FormControl,Button} from 'react-bootstrap';
import { format } from 'date-fns';



const Scoreboard = () => {
    
	const [searchQuery, setSearchQuery] = useState('');
    const [selectedLeague, setSelectedLeague] = useState(140);
	const [time, setTime] = useState('past');
    const [fixtures, setFixtures] = useState([]);

	const leaguesList = [
        { id: 39, name: 'Premier League' },
        { id: 140, name: 'La Liga' },
        { id: 135, name: 'Serie A' },
        { id: 78, name: 'Bundesliga' },
        { id: 61, name: 'Ligue 1' },
        { id: 2, name: 'UEFA Champions League' },
        { id: 3, name: 'UEFA Europa League' },
        { id: 848, name: 'UEFA Conference League' },
        { id: 88, name: 'Eredivisie' },
        { id: 94, name: 'Primeira Liga' },
        { id: 71, name: 'Brasileirao Serie A' },
        { id: 128, name: 'Argentine Primera Division' },
        { id: 203, name: 'Super Lig' },
        { id: 253, name: 'MLS' },
        { id: 144, name: 'First Division A' },
        { id: 262, name: 'Liga MX' },
        { id: 40, name: 'Championship' },
        { id: 98, name: 'J1 League' },
        { id: 68, name: 'Superleague' },
        { id: 103, name: 'Eliteserien' }
    ];


    useEffect(() => {

     
        const fetchFixtures = async (league, time) => {

            let params = {
                season: '2023',
                league: league,
            };    

            if (time === 'current') {
                const today = new Date();
                params.date = format(today, 'yyyy-MM-dd');
            } else if (time === 'scheduled') {
                params.next = 20;
            } else if (time === 'past') {
                params.last = 20;
            }

            try {
                const response = await axios.get('https://v3.football.api-sports.io/fixtures', {
                    params: params,
                    headers: {
                        'x-rapidapi-host': 'v3.football.api-sports.io',
                        'x-rapidapi-key':'6d1c1eae83a98e627d2fd7b059c9ef03',
                    }
                });
                setFixtures(response.data.response);

                for(let i = 0; i < response.data.response.length; i++) {
                    console.log(response.data.response[i]);
                }

            } catch (err) {
                console.log(err);
            }
        };


        fetchFixtures(selectedLeague, time);
    }, [selectedLeague, time]);


	const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleLeagueSelect = (id) => {
        setSelectedLeague(id);
    };

    const filteredLeagues = leaguesList.filter((league) =>
        league.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

	const handleTime = (time) => {
        setTime(time);
    };


	return (

		<Container className = "mt-5">
			<Dropdown className="w-100 mb-3">
                <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100 btn-sm fw-bold rounded-pill border border-dark">

				Select League/Competition
                
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100 p-2">
                    <FormControl
                        autoFocus
                        className="mb-2"
                        placeholder="Search for a league"
                        onChange={handleSearch}
                        value={searchQuery}
                    />
                    {filteredLeagues.map((league) => (
                        <Dropdown.Item key={league.id} onClick={() => handleLeagueSelect(league.id)}>
                            {league.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>

			<div className = "time-buttons">

				<Button variant="primary" onClick={() => handleTime("current")}>
					Current
				</Button>

				<Button variant="success" onClick={() => handleTime("scheduled")}>
					Scheduled
				</Button>


				<Button variant="dark" onClick={() => handleTime("past")}>
					Past 
				</Button>

			</div>


			<div className = "fixtures-box overflow-auto">		

				<div className="header-box">
                    <div className="league-logo">
                        <img src={`https://media.api-sports.io/football/leagues/${selectedLeague}.png`} alt="League Logo" />
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

