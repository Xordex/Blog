import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
    return (
        <div className='login'>
            <span className='loginTitle'>Logowanie</span>
            <form className='loginForm'>
                <label>Email</label>
                <input type="text" className='loginInput' placeholder='Wpisz Email...' />
                <label>Hasło</label>
                <input type="password" className='loginInput' placeholder='Wpisz Hasło...' />
                <button className="loginButton">Zaloguj</button>
                <Link to="/register"><button className="loginRegisterButton">Rejestracja</button></Link>
            </form>
        </div>
    )
}
