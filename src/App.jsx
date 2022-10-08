import './App.scss';
import React from 'react';
import Navbar from './Navbar/Navbar'
import LoremIpsum from './assets/LoremIpsum/LoremIpsum';
import { links } from './Navbar/Links/Links'
import logo from './assets/DemoLogo.png'

export default function App() {

    return (
        <>
            <Navbar
                links={links}
                logo={logo}
            />
            <LoremIpsum />
        </>
    );
}