import './topbar.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import womanImage from '../../assets/woman.jpg'
import { Link } from 'react-router-dom';

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
                    <Link to='/'><li className='topListItem'>Home</li></Link>
                    <li className='topListItem'>About</li>
                    <li className='topListItem'>Contact</li>
                    <Link to='/write'><li className='topListItem'>Write</li></Link>
                    <Link to="/login"><li className='topListItem'>Login</li></Link>
                </ul>
            </div>
            <div className="topRight">
                <Link to='/register'><img src={womanImage} alt="woman" className='topImg' /></Link>
                <FaSearch className='topSearchIcon' />
            </div>
        </div>
    )
}