import './topbar.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import womanImage from '../../assets/woman.jpg'

export default function Topbar() {
    return (
        <div className="top">
            <div className="topLeft">
                <FaFacebookF className='topIcon' />
                <FaTwitter className='topIcon' />
                <FaInstagram className='topIcon' />
                <FaPinterestP className='topIcon' />
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>Home</li>
                    <li className='topListItem'>About</li>
                    <li className='topListItem'>Contact</li>
                    <li className='topListItem'>Write</li>
                    <li className='topListItem'>Logout</li>
                </ul>
            </div>
            <div className="topRight">
                <img src={womanImage} alt="woman" className='topImg' />
                <FaSearch className='topSearchIcon' />
            </div>
        </div>
    )
}