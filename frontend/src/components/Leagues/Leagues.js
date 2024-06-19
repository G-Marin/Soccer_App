import "./Leagues.css";
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {Container, Dropdown, FormControl} from 'react-bootstrap';
import { LeagueContext } from '../../utils/leaguecontext.js';

const Leagues = () => {
	const [searchQuery, setSearchQuery] = useState('');
    const [league, setLeague] = useState({id: 140, name: 'La Liga'});
    const [standings, setStandings] = useState([]);
    const [season, setSeason] = useState('2023');
    const {leaguesList} = useContext(LeagueContext);

    useEffect(() => {

        const fetchStandings = async (league, season) => {
            try {
                const response = await axios.get('/api/standings', {
                    params: {
                        season: season,
                        league: league.id,
                    },
                });

                setStandings(response.data[0]);
            } catch (err) {
                console.log(err);
            }
        };

        fetchStandings(league, season);
    }, [league, season]);

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


            <div className = "col dropdown-form">
            <Dropdown className="white" size="sm">
                        <Dropdown.Toggle variant="warning" id="dropdown-basic" className="w-100">
                            {league.name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="w-100">
                            <FormControl
                                autoFocus
                                placeholder="Search for a league"
                                onChange={handleSearch}
                                value={searchQuery}
                            />
                            {filteredLeagues.map((league) => (
                                <Dropdown.Item
                                    key={league.id}
                                    onClick={() => handleLeagueSelect(league)}
                                    >
                                    {league.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
            </div>

    

        </div>

            <div className="fixtures-box overflow-auto">
                <div className="header-box p-5">
                    <div className="league-logo">
                        <img src={`https://media.api-sports.io/football/leagues/${league.id}.png`} alt="League Logo" />
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

                {standings.map((rank, index) => (
                    <div key={rank.team.id} className="row p-3 entry">
                        <div className="col-1 fw-bold">{index + 1}</div>
                        <div className="col-1 team-logo picture">
                            <img src={rank.team.logo} alt={rank.team.name} />
                        </div>
                        <div className="col-1">{rank.points}</div>
                        <div className="col-1">{rank.all.win}</div>
                        <div className="col-1">{rank.all.draw}</div>
                        <div className="col-1">{rank.all.lose}</div>
                        <div className="col-1">{rank.all.goals.for}</div>
                        <div className="col-1">{rank.all.goals.against}</div>
                        <div className="col-1">{rank.goalsDiff}</div>
                        <div className="col-1">{rank.all.played}</div>
                        <div className="col-2" align="center">{rank.form}</div>
                    </div>
                ))}
            </div>
        </Container>
    
	)}

export default Leagues;