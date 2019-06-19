import React from 'react';
import {  } from 'semantic-ui-react'
import {Link} from 'react-router-dom';


const Welcome = () => {

    return (
      <div>
        <div>Hello</div>
        <div><Link to="/signup">Sign up</Link></div>
        <div><Link to="/login">Log In</Link></div>
      </div>
    )

}

export default Welcome;
