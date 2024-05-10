import React from 'react';
import {Container} from 'react-bootstrap';

function Leagues() {
  return (
    <div className="Home">
      
	    <Container className = "mt-5">

            <p className  = "text-white h3 p-3"> League: </p>

                <iframe src = "/standings.html" width = "100%" height = "1000px" title = "Live Scores" allowtransparency = "true" allow = "encrypted-media"></iframe>

        </Container>
        
    </div>
  );
}


export default Leagues;