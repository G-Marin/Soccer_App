import "./Content.css";
import React from 'react';
import { useState, useContext } from 'react';
import {Container} from 'react-bootstrap';
import { LeagueContext } from '../../context/leaguecontext.js';
import Selection from '../Content/Selection.js';
import Content from '../Content/Content.js';


const Page = ({type}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [league, setLeague] = useState({id: 140, name: 'La Liga'});
    const [season, setSeason] = useState('2023');
    const {leaguesList} = useContext(LeagueContext);
    const [time, setTime] = useState('past');
    const [expanded, setExpanded] = useState(false);

    
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

    useState(() => {
        if(type === 'Livescore'){
            setExpanded(true);
        }
    }, [type]);



    return (

        <Container >

            <h1 className = "text-center text-white mt-5 mb-5"> {type}</h1>


            <Selection
            expanded = {expanded}
            handleSearch = {handleSearch}
            searchQuery = {searchQuery}
            handleSeasonSelect = {handleSeasonSelect}
            handleLeagueSelect = {handleLeagueSelect}
            filteredLeagues = {filteredLeagues}
            handleTime = {handleTime}
            time = {time}
            league = {league}
            season = {season}
            />

            <Content 
            type = {type} 
            league = {league}
            season = {season}
            time = {time}
            />



        </Container>


    );
};

export default Page;