import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <Container className="w-100 h-100">
                <h1 className="text-center text-white title">
                    Welcome to Golazo
                </h1>

                <p className="text-center text-white">
                    Golazo is a web application that provides live scores,
                    league standings, top scorers, and personalized news for
                    various soccer leagues around the world.{' '}
                </p>
            </Container>
        </div>
    );
}

export default Home;
