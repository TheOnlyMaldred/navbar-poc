import React from 'react'
import './Dropdown.scss'

export default function Dropdown({ subLinks, isVisible }) {

    let active = isVisible;

    isVisible ? active = " active" : active = "";

    return (

        <div className={`sub-links${active}`}>

            {subLinks.map((subLink, key) =>

                <a className='sub-link' href={subLink.url} key={key}>
                    {subLink.name}
                </a>

            )}

        </div>
    );
}