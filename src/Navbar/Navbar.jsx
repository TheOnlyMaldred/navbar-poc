import React, { useState } from 'react'

import './Navbar.scss'

import Dropdown from './Dropdown/Dropdown'

import searchIcon from '../assets/SearchIcon.webp'
import logoDefault from '../assets/ReactIcon.png'


export default function Navbar({ links, logo }) {

    const [show, setShow] = useState(false, undefined);

    return (
        <div id='navbar'>

            <img src={logo !== undefined ? logo : logoDefault} className="logo" alt="My Logo" />

            <ul>

                {links.items.map((name, key) => (
                    <li key={key}>

                        <a className='link' href={name.url}
                            onMouseEnter={() => {
                                setShow(true, key);
                            }}
                            onMouseLeave={() => {
                                setShow(false, key);
                            }} >
                            {name.name}
                        </a>

                        {name.subLinks !== undefined
                            ? <Dropdown subLinks={name.subLinks} isVisible={show} id={key} />
                            : undefined
                        }

                    </li>
                )
                )}

            </ul>

            <div className='search-icon' >
                <img src={searchIcon} alt="Search Bar" />
            </div>
        </div>
    )
}