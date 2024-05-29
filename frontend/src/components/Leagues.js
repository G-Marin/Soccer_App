import "./Leagues.css";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, Dropdown, FormControl} from 'react-bootstrap';

const Leagues = () => {
	const [searchQuery, setSearchQuery] = useState('');
    const [selectedLeague, setSelectedLeague] = useState(140);
    const [standings, setStandings] = useState([]);

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
        const fetchStandings = async (id) => {
            try {
                const response = await axios.get('https://v3.football.api-sports.io/standings', {
                    params: {
                        season: '2023',
                        league: id,
                    },
                    headers: {
                        'x-rapidapi-host': 'v3.football.api-sports.io',
                        'x-rapidapi-key':'6d1c1eae83a98e627d2fd7b059c9ef03',
                    }
                });
                setStandings(response.data.response[0].league.standings[0]);
            } catch (err) {
                console.log(err);
            }
        };

        fetchStandings(selectedLeague);
    }, [selectedLeague]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleLeagueSelect = (id) => {
        setSelectedLeague(id);
    };

    const filteredLeagues = leaguesList.filter((league) =>
        league.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container className="mt-5">
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

            <div className="standings-box overflow-auto">
                <div className="header-box">
                    <div className="league-logo">
                        <img src={`https://media.api-sports.io/football/leagues/${selectedLeague}.png`} alt="League Logo" />
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