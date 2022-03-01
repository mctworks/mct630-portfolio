import React, { useEffect, createContext, useContext, useState } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';
import "../styles/Main.css";

import {Routes, Route, useLocation} from 'react-router-dom';

export default function Main (){
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    
    const [transitionStage, setTransitionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransitionStage("fadeOut");
    }, [location]);

    return (<React.Fragment>
        <div id="outer-container" className={`${transitionStage}`}
        onAnimationEnd={() => { 
            if (transitionStage === "fadeOut") {
                setTransitionStage("fadeIn");
                setDisplayLocation(location);
            }
        }}
        >
        <Header />
        <div id='page-wrap'>
        <Routes location={displayLocation}>
        <Route exact path='/' element={<Home/> }  />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>}  />
        <Route path='/contact' element={<Contact/>}  />
        </Routes>
        
        <Footer/>
        </div>
        </div>
    </React.Fragment>)
}