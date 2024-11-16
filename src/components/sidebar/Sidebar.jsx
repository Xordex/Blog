import './sidebar.css';
import sidebarImg from '../../assets/portrait.jpg';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">O nas</span>
                <img src={sidebarImg} alt="" className='author-face' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam deserunt laudantium, earum nesciunt consequatur voluptatibus veniam, dolorem dolores quasi esse fugit ab reprehenderit nobis voluptas assumenda unde magnam omnis.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Kategorie</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Ekologia</li>
                    <li className="sidebarListItem">Styl życia</li>
                    <li className="sidebarListItem">Porady</li>
                    <li className="sidebarListItem">Zdrowie</li>
                    <li className="sidebarListItem">Transport</li>
                    <li className="sidebarListItem">Środowisko</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Zaobserwuj nas</span>
                <div className="sidebarSocial">
                    <FaFacebookF className='sidebarIcon' />
                    <FaTwitter className='sidebarIcon' />
                    <FaInstagram className='sidebarIcon' />
                    <FaPinterestP className='sidebarIcon' />
                </div>
            </div>
        </div>
    )
}
