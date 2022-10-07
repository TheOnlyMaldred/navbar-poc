import './App.scss';
import { useState } from 'react';
import Navbar from './Navbar/Navbar'

export default function App() {

    const [navbarStyle, setNavbarStyle] = useState("Navbar 1");

    return (
        <>
            <Navbar
                navbarSelected={navbarStyle}
                setNavbarSelected={setNavbarStyle}
            />

            <div id='navbar-selected'>
                <h1>Current Navbar Style</h1>
                <p>{navbarStyle}</p>
            </div>

            <div id='main-stretch'>

                <button onClick={() => setNavbarStyle("Navbar 1")}>
                    Navbar 1
                </button>
                <button onClick={() => setNavbarStyle("Navbar 2")}>
                    Navbar 2
                </button>
                <button onClick={() => setNavbarStyle("Navbar 3")}>
                    Narvbar 3
                </button>

            </div>
        </>
    );
}