import './Home.css';
import React from 'react';
import {Container} from 'react-bootstrap';

function Home() {
  return (
    <div className="Home">
      
    

      <Container className = "w-100 h-100 title">




        <h1 className = "text-center text-white">Welcome to Golazo</h1>
        

        <p className = "text-center text-white">Golazo is a web application that provides live scores, league standings, and top scorers for various soccer leagues around the world. </p>

      </Container>



    </div>
  );
}

export default Home;
