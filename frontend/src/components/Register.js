import './Login.css';
import React from 'react';
import {Container, Form, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';

function Register() {


	const [teams, SetTeams] = React.useState(["Barcelona", "Real Madrid", "Manchester United", "Liverpool", "Chelsea", "Arsenal", "Manchester City", "Tottenham Hotspur", "Bayern Munich", "Borussia Dortmund", "Paris Saint-Germain", "Juventus", "Inter Milan", "AC Milan", "Atletico Madrid", "Sevilla", "Valencia", "Villarreal", "Real Betis", "Real Sociedad", "Athletic Bilbao", "Leicester City", "West Ham United", "Everton", "Aston Villa", "Leeds United", "Wolverhampton Wanderers", "Crystal Palace", "Newcastle United", "Southampton", "Brighton & Hove Albion", "Burnley", "Fulham", "West Bromwich Albion", "Sheffield United"]);

	const [formData, setFormData] = React.useState({
		username: '',
		password: '',
		email: '',
		team: '',
	});


	


	// Function to update state on input change
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	// Function to handle form submission
	const handleSubmit = async (e) => {

		e.preventDefault();

		try {
			const response = await axios.post('/user/add', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			console.log('Response:', response.data);
		} catch (error) {
			console.error('Error posting data:', error);
		}
	};


	return (

	
		<Container className = "login">

			<div className="row" align = "center"> 

				<div className="text-white h1 mb-5">Welcome Back</div>
			
			
				<div className="text-white mb-5">

					<Form>

						<Form.Group className="mb-1 w-25" controlId="form" align = "left">

							<Form.Label className="text-white" >Username</Form.Label>

							<Form.Control 
							type="text" 
							placeholder="Enter username" 
							name="username"
							value={formData.username}
							onChange={handleChange}
							/>

						</Form.Group>

						<Form.Group className="mb-1 w-25" controlId="form" align = "left">

							<Form.Label className="text-white">Password</Form.Label>

							<Form.Control 
							type="password" 
							placeholder="Enter Password" 
							name="password"
							value={formData.password}
							onChange={handleChange}
							/>

						</Form.Group>
						<Form.Group className="mb-1 w-25" controlId="form" align = "left">

							<Form.Label className="text-white">Email</Form.Label>

							<Form.Control 
							type="email" 
							placeholder="Enter Email" 
							name="email"
							value={formData.email}
							onChange={handleChange}
							/>

						</Form.Group>

						<Form.Group>

							<Form.Label className="text-white" >Select your favorite team</Form.Label>

							<Form.Select 
							className="mb-3 w-25" 
							aria-label="Default select example"
							name="team"
							value={formData.team}
							onChange={handleChange}							
							>

								<option>Select your favorite team</option>

								{teams.map((team, index) => (
									<option key={index} value={team}>{team}</option>
								))}

							</Form.Select>


						</Form.Group>

						<Button type = "submit" onClick = {handleSubmit}> Submit </Button>

					</Form>
	
			
				</div>


			
				<div className="text-white mb-5">Have an account? <a href="/login" className="text-white">Login</a></div>
			
			</div>
			

		</Container>

			

		
	);
}

export default Register;
