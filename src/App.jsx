import './App.scss';
import React from 'react';
import Navbar from './Navbar/Navbar'

import logo from './assets/DemoLogo.png'

import LoremIpsum from './assets/LoremIpsum/LoremIpsum';
import { links } from './Navbar/Links/Links'

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