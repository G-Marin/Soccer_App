import "./Livescore.css";
import React, { useEffect } from 'react';
import { Dropdown, Container, FormControl } from 'react-bootstrap';
import { useState } from 'react';

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

	const [searchQuery, setSearchQuery] = React.useState('');
	const [leagues, setLeagues] = React.useState([

	'Premier League',
	'La Liga',
	'Serie A',
	'Bundesliga',
	'Ligue 1',
	'UEFA Champions League',
	'UEFA Europa League',
	'UEFA Conference League',
	'Eredivisie',
	'Primeira Liga',
	'Brasileirao Serie A',
	'Argentine Primera Division',
	'Super Lig',
	'MLS',
	'First Division A',
	'Liga MX',
	'Championship',
	'J1 League',
	'Superleague',
	'Eliteserien',
	]);

	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
	};

	const filteredLeagues = leagues.filter((league) => 
		league.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (

		<Container className = "mt-5">

		<iframe src = "/scoreboard.html" className = "w-100 scores"></iframe>

		<Dropdown className = "w-100"> 

			<Dropdown.Toggle variant="secondary" id="dropdown-basic" className = "w-100 btn-sm">

			Select League

			</Dropdown.Toggle>

			<Dropdown.Menu className = "w-100 p-2">

				<FormControl 
				autoFocus
				className = "mb-2"
				placeholder = "Search for a league"
				onChange = {handleSearch}
				value = {searchQuery}
				/>

				{filteredLeagues.map((league, index) => (
                	<Dropdown.Item key={index}>{league}</Dropdown.Item>
                ))}
			
			</Dropdown.Menu>

		</Dropdown>

		

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

