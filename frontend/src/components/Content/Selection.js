import "../Leagues/Leagues.css";
import React from 'react';
import { useState, useContext } from 'react';
import {Container, Dropdown, FormControl, Button} from 'react-bootstrap';
import { LeagueContext } from '../../utils/leaguecontext.js';


const Selection = ({expanded}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [league, setLeague] = useState({id: 140, name: 'La Liga'});
    const [season, setSeason] = useState('2023');
    const {leaguesList} = useContext(LeagueContext);
    const [time, setTime] = useState('past');

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

       
            <div className = "row selection">

                {expanded ? (<>
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
                    
                </>) : (<> </>)}


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


    )}


export default Selection;