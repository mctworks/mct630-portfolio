import React from 'react';
import {Link} from 'react-router-dom';

function About(){
    return (<React.Fragment>
        <h1>About</h1>
        <Link to='/'>HOME</Link>
    </React.Fragment>
    );   
}

export default About;