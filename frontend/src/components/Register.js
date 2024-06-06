import './Login.css';
import React from 'react';
import {Container, Dropdown} from 'react-bootstrap';
import axios from 'axios';

function Login() {


	const [formData, setFormData] = React.useState({
		username: '',
		password: '',
		email: '',
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
          <div className="form-group">
            <label htmlFor="email" className="text-white">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

		  <Dropdown className="btn" drop = "down-centered">
          		<Dropdown.Toggle>
            				League
          		</Dropdown.Toggle>
          		<Dropdown.Menu className = "w-100">
					<Dropdown.Item onClick={() => handleChange('140')}>La Liga</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleChange('78')}>Bundesliga</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleChange('39')}>Premier League</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleChange('262')}>Liga MX</Dropdown.Item>
          		</Dropdown.Menu>
        	</Dropdown>


          <button type="submit" className="btn btn-primary mt-3">Submit</button> 




				</form>

				</div>


			
				<div className="text-white mb-5">Have an account? <a href="/login" className="text-white">Login</a></div>
			
			</div>
			

		</Container>

			

		
	);
}

export default Login;
