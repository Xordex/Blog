import Sidebar from '../../components/sidebar/Sidebar';
import './setting.css';
import SetImg from '../../assets/portrait.jpg';
import { FaUser } from "react-icons/fa";

export default function Setting() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Zaktualizuj dane konta</span>
                    <span className="settingsDeleteTitle">Usuń konto</span>
                </div>
                <form className="settingsForm">
                    <label>Zdjęcie profilowe</label>
                    <div className="settingsPP">
                        <img src={SetImg} alt="" />
                        <label htmlFor="fileInput">
                            <FaUser className='settingsPPIcon' />
                        </label>
                        <input type="file" id='fileInput' />
                    </div>
                    <label>Imię</label>
                    <input type="text" placeholder='Michał' />
                    <label>Email</label>
                    <input type="email" placeholder='kontakt@michaljaroch.pl' />
                    <label>Hasło</label>
                    <input type="password" placeholder='********' />
                    <button className="settingsSubmit">Zapisz</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
