import Sidebar from '../../components/sidebar/Sidebar';
import './setting.css';
import SetImg from '../../assets/portrait.jpg';
import { FaUser } from "react-icons/fa";

export default function Setting() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={SetImg} alt="" />
                        <label htmlFor="fileInput">
                            <FaUser />
                        </label>
                        <input type="file" id='fileInput' />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Michael' />
                    <label>Email</label>
                    <input type="email" placeholder='kontakt@michaljaroch.pl' />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
