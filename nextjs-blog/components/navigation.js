import  styles  from './navigation.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'
import React, { useState } from 'react';



library.add(
  faCode,
  faLinkedin,
  faHighlighter
);

export default function Navigation (props){
    return(
        <div className="container">
        <div className="row">
            <nav className={styles.navbar}>
                <ul className={styles.nav}>
                    <li><a href="#home">Home</a></li>
                    <li><a id="navWork" href="#work">Work</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    
                </ul>
                <a href="https://www.linkedin.com/in/david-heremans/">
                <FontAwesomeIcon className={styles.svg} icon={faLinkedin}/>
                </a>
            </nav>

          
        </div>
    </div>
    )
}