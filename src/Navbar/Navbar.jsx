import './Navbar.scss'
import { navbarItems } from './Items/Items'
import logo from '../assets/React-icon.svg.webp'
import search from '../assets/search-icon2.webp'

export default function Navbar({ navbarSelected, setNavbarSelected }) {

    return (
        <div id='navbar'>

            <ul className='content'>

                <img src={logo} alt="" />

                {navbarItems.items.map((item, key) =>
                    <li key={key}><a href={item.link}>{item.title}</a></li>
                )}

            </ul>

            <img className='search-icon' src={search} alt="" />
            
        </div>
    )
}