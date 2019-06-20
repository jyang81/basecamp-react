import React from 'react';
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom';


const Welcome = () => {

    return (
      <div className="bg-img">
      <div className="logoFont">
        <img src="./images/bc-logo-vert.svg" alt="BaseCamp Logo Stacked"/>
        <h1 className="logoFont">Welcome to BaseCamp</h1>
        <h2 className="logoFont">Your Bootcamp Dashboard</h2>
        <div><br/><Link to="/login"><Button color='violet'>Log In</Button></Link></div>

      </div>
    </div>
    )

}

export default Welcome;
