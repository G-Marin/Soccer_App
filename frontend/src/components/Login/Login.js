import './Login.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

function Login() {


	const [formData, setFormData] = React.useState({
		username: '',
		password: '',
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
			const response = await axios.post('/user/login', formData, {
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
	
				<form onSubmit={handleSubmit} className = "w-25 text-start">
					<div className="form-group">
						<label htmlFor="username" className="text-white">Username:
						</label>
							<input
								type="text"
								className="form-control"
								id="username"
								name="username"
								value={formData.username}
								onChange={handleChange}
							/>
					</div>
					<div className="form-group">
						<label htmlFor="password" 	className="text-white">Password:
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
						/>
					</div>
					<button type="submit" className="btn 		btn-primary mt-3">Submit</button>
				</form>

				</div>


			
				<div className="text-white mb-5">Don't have an account? <a href="/register" className="text-white">Register</a></div>
			
			</div>
			

		</Container>

			

		
	);
}

export default Login;
