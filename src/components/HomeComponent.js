import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Home.css";
import {killTyped} from './HeaderComponent';

function Home(){

    return (<React.Fragment>
        
        <h1 class='brand'>MCT|6|30|_</h1>
        <h4>Michael C. Thompson: Front-End Dev | UI/UX</h4>
        <div class='bluehead'></div>
        <div class='home-links'>
        <Link onClick={ killTyped } to='/about' >A<span class="fast-flicker">BO</span><span class="about_U flicker">u</span><span class="flicker">T</span></Link><br />
        <Link onClick={ killTyped }
          to='/projects'>PR<span class="fast-flicker">OJ</span><span class="flicker">ECT</span>S</Link><br />
        <Link onClick={ killTyped } to='/contact'>CO<span class="flicker">NTA</span><span class="fast-flicker">CT</span></Link><br />
        </div>
    </React.Fragment>);   
}

export default Home;
