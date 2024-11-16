import './header.css';
import natureImg from '../../assets/nature.jpg';

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">Środowiskowy</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src={natureImg} alt="" className="headerImg" />
        </div>
    )
}
