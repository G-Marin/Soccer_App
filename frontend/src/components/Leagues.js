import "./Leagues.css";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, Dropdown, FormControl, Button} from 'react-bootstrap';

const Leagues = () => {
	const [searchQuery, setSearchQuery] = useState('');
    const [league, setLeague] = useState(140);
    const [standings, setStandings] = useState([]);
    const [season, setSeason] = useState('2023');
    const [leaguesList, setLeaguesList] = useState([]);

    useEffect(() => {

        const fetchLeagues = async (season) => {
            try {
                const response = await axios.get('/api/leagues', {
                    params: {
                        season: season,
                    },
                });
                setLeaguesList(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        const fetchStandings = async (league, season) => {
            try {
                const response = await axios.get('/api/standings', {
                    params: {
                        season: season,
                        league: league,
                    },
                });
                setStandings(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchLeagues(season);
        fetchStandings(league, season);
    }, [league, season]);

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

    return (
        
        <Container className="mt-5">

            <h1 className = "text-center text-white mt-5 mb-5"> League Standings </h1>

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


            <div className = "col">
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

            <div className="fixtures-box overflow-auto">
                <div className="header-box p-5">
                    <div className="league-logo">
                        <img src={`https://media.api-sports.io/football/leagues/${league}.png`} alt="League Logo" />
                    </div>
                </div>

                <div className="row p-3 fw-bold labels">
                    <div className="col-1">#</div>
                    <div className="col-1">Team</div>
                    <div className="col-1">Points</div>
                    <div className="col-1">W</div>
                    <div className="col-1">D</div>
                    <div className="col-1">L</div>
                    <div className="col-1">Goals</div>
                    <div className="col-1">Goals Conceded</div>
                    <div className="col-1">GD</div>
                    <div className="col-1">Matches Played</div>
                    <div className="col-2" align="center">Form</div>
                </div>

                {standings.map((team, index) => (
                    <div key={team.team.id} className="row p-3 entry">
                        <div className="col-1 fw-bold">{index + 1}</div>
                        <div className="col-1 team-logo">
                            <img src={team.team.logo} alt={team.team.name} />
                        </div>
                        <div className="col-1">{team.points}</div>
                        <div className="col-1">{team.all.win}</div>
                        <div className="col-1">{team.all.draw}</div>
                        <div className="col-1">{team.all.lose}</div>
                        <div className="col-1">{team.all.goals.for}</div>
                        <div className="col-1">{team.all.goals.against}</div>
                        <div className="col-1">{team.goalsDiff}</div>
                        <div className="col-1">{team.all.played}</div>
                        <div className="col-2" align="center">{team.form}</div>
                    </div>
                ))}
            </div>
        </Container>
    
	)



	// const widgetRef = useRef(null);

	// useEffect(() => {

	// 	const script = document.createElement('script');
	// 	script.src = 'https://widgets.api-sports.io/2.0.3/widgets.js';
	// 	script.async = true;
	// 	script.type = 'module';

	// 	document.body.appendChild(script);

	// 	return () => {
	// 		document.body.removeChild(script);
	// 	};

	// }, []);
	
	// console.log(widgetRef);

	// return (
    //     <div
    //         ref={widgetRef}
    //         id="wg-api-football-games"
    //         data-host="v3.football.api-sports.io"
    //         data-key= "6d1c1eae83a98e627d2fd7b059c9ef03" 
    //         data-date=""
    //         data-league=""
    //         data-season=""
    //         data-theme=""
    //         data-refresh=""
    //         data-show-toolbar="true"
    //         data-show-errors="false"
    //         data-show-logos="true"
    //         data-modal-game="true"
    //         data-modal-standings="true"
    //         data-modal-show-logos="true">
    //     </div>
    // );

}

// 	const [table, setTable] = useState('');


// 	useEffect(() => {
// 		fetch('/scoreboard')
// 		.then(response => response.json())
// 		.then(data => setTable(data))
// 		.catch(err => console.log(err));
// 	});

//   	return (
//     	<div className="Home">
//       	<Container className = "w-100 h-100 title">
// 			<h1>Live Scores</h1>
// 			<div dangerouslySetInnerHTML={{ __html: table }}></div>
//       	</Container>

//     	</div>
//   )	;


export default Leagues;