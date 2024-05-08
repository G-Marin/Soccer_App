import React, { useEffect } from 'react';
import { useRef } from 'react';
import {Container } from 'react-bootstrap';

const Scoreboard = () => {

	return (

		<Container className = "mt-5">

		<p className  = "text-white h3 p-3"> League: </p>

		<iframe src = "/scoreboard.html" width = "100%" height = "1000px" title = "Live Scores" allowtransparency = "true" allow = "encrypted-media"></iframe>

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