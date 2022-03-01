import React, { useRef, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import Typed from "typed.js";
import "../styles/Header.css";
import {pushRotate as Menu} from 'react-burger-menu';

var header_txt ="";
const el = "";
export const killTyped = () => el.destroy(); //removes the currently displayed autotext. ALSO changes body bg and text colors as well as navbar's color scheme. Include this anytime there's a change in primary page paths e.g. as an onClick action for links to other pages

export default function Header(){
    // Handles autotext using Typed.js in addition to page color scheme
    if (header_txt !== null){
        header_txt = "";
    }

    const header_strings = [">> MCT|6|30_HOM: Homepage for Michael C. Thompson. Welcome! Enjoy your visit!", 
    ">> MCT|6|30_ABT: Michael's profile, including professional background.", 
    ">> MCT|6|30_PRJ: Past and current projects Michael has worked on, either solo or in colaboration.", 
    ">> MCT|6|30_CON: Ways to contact Michael. Feel free to reach out to him for questions or permanent remote positions!"];
    const el = useRef(null);
    let location = useLocation();
    var typing_color;

    console.log(location.pathname);
    useEffect(() => {
        if (location.pathname === "/about") {
            //About Page (2/28 - Not yet designed, placeholder colors)
            header_txt = header_strings[1];
            document.body.style.backgroundColor = "#24601A";
            typing_color = "#aaa";
        } else if (location.pathname === "/projects") {
            //Projects Page
            header_txt = header_strings[2];
            document.body.style.backgroundColor = "#741717";
            document.body.style.color = "#ffe3e3";
            typing_color = "#f5b0b0";
        } else if (location.pathname === "/contact") {
            //Contact Page (2/28 - Not yet designed, placeholder colors)
            header_txt = header_strings[3];
            document.body.style.backgroundColor = "#24601B";
            typing_color = "#aaa";
        } else if (location.pathname === "/") {
            //HOME PAGE HERE!
            header_txt = header_strings[0];
            document.body.style.backgroundColor = "#D7FEFE";
            typing_color = "#1178AE";
        } else {
            header_txt = ">> //ERR0R ERR0R ERR0R ERR0R ERR0R ERR0R ERR0R ERR0R ERR0R";
        };

        var typed_header = new Typed(el.current, {
          strings: [header_txt],
          startDelay: 300,
          typeSpeed: 5,
          loop: false,
          showCursor: true,
          cursorChar: "_",
          onDestroy: function(self) {console.log('onDestroy' + self)}
        });
    
        // Destropying
        return () => {
          typed_header.destroy(); 
        };
      }, []);

    return (
    <div className="header">
        <div className="autotext">
        <span ref={el} className="header_title" id="header-txt" />
        </div>
        <div class="header_nav">
        <Menu right noOverlay width={ '29.5%' } height={ '100%' } pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
            <h3 className='menu-branding'>MCT|<br />6|30|_</h3>
            <Link className="nav_link" onClick={ killTyped } to='/'>Home </Link>
            <Link className="nav_link" onClick={ killTyped } to='/about'>About </Link>
            <Link className="nav_link" onClick={ killTyped } to='/projects'>Projects</Link>
            <Link className="nav_link" onClick={ killTyped } to='/contact'>Contact</Link>
        </Menu>
        </div>
    </div>      
        );
}