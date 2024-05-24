import './Home.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';


function Login() {


  const [formData, setFormData] = React.useState({
    user_id : '',
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

    console.log(formData)

    e.preventDefault();

    try {
      const response = await axios.post('/addUser', formData, {
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
    <div className="Home">
      
    

      <Container className = "w-100 h-100 title">

       

       <form onSubmit={handleSubmit} className="mt-4">
          <div className="form-group">
            <label htmlFor="user_id" className="text-white">User ID:</label>
            <input
              type="text"
              className="form-control"
              id="user_id"
              name="user_id"
              value={formData.user_id}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username" className="text-white">Username:</label>
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
            <label htmlFor="password" className="text-white">Password:</label>
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </Container>

     





    </div>
  );
}

export default Login;
