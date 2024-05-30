import "./Livescore.css";
import React, { useEffect, useState } from 'react';
import { Dropdown, Container, FormControl,Button} from 'react-bootstrap';



const Scoreboard = () => {

	useEffect(() => { 
		const script = document.createElement('script');
		script.src = 'https://widgets.api-sports.io/2.0.3/widgets.js';
		script.type = 'module';
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	const [searchQuery, setSearchQuery] = useState('');
    const [selectedLeague, setSelectedLeague] = useState(140);
	const [time, setTime] = React.useState('current');

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
	const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleLeagueSelect = (id) => {
        setSelectedLeague(id);
    };

    const filteredLeagues = leaguesList.filter((league) =>
        league.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

	const changeTime = (e) => {
		setTime(e.target.innerText);
	}

	
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

			

				<Button variant="primary" onClick={changeTime}>
					Current
				</Button>

				<Button variant="success" onClick={changeTime}>
					Scheduled
				</Button>


				<Button variant="dark" onClick={changeTime}>
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
                    <div className="col-2">Form</div>
                    <div className="col-2">Home</div>
                    <div className="col-2">Away</div>
                    <div className="col-2">Form </div>
					<div className="col-1">Time</div>
					<div className="col-1">Date</div>
					<div className="col-1">Stadium</div>
					<div className="col-1">Referee</div>
                 
                </div>

				<div className="row p-3 fw-bold fixture-labels" align = "center">
                    <div className="col-2"> 

					DWWWD
	
					</div>
                    <div className="col-2">	

					<div className = "fixture-teams">
						<img src="https://media.api-sports.io/football/teams/541.png" alt="Home Team" />

					</div> </div>

					
                    <div className="col-2">	<div className = "fixture-teams">
						<img src="https://media.api-sports.io/football/teams/541.png" alt="Home Team" />
					</div> 
					</div>
                    <div className="col-2">DDDWW </div>
					<div className="col-1">15:00</div>
					<div className="col-1">5/29/24</div>
					<div className="col-1">Bernabeu</div>
					<div className="col-1">Perez</div>
                 
                </div>


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

export default Scoreboard;

