"use client"
import React from 'react'
import '@/app/Testnav.css'

function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


function myFunction() {
    const x = document.getElementById("myTopnav") as HTMLElement;
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const TestNav = () => {
    return (
        <div>
            <div>
                <div className="topnav" id="myTopnav">
                    <span className="active" onClick={() => scrollToElement('home')}>Home</span>
                    <span onClick={() => scrollToElement('about')}>About</span>
                    <span onClick={() => scrollToElement('services')}>Services</span>
                    <span onClick={() => scrollToElement('skills')}>Skills</span>
                    <span onClick={() => scrollToElement('contact')}>Contact</span>
                    <span className="icon" onClick={myFunction}>More </span>
                </div>
            </div>
        </div>
    )
}

export default TestNav