import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
    return (
        <div className='register'>
            <span className='registerTitle'>Rejestracja</span>
            <form className='registerForm'>
                <label>Email</label>
                <input type="text" className='registerInput' placeholder='Wpisz Email...' />
                <label>Imię</label>
                <input type="text" className='registerInput' placeholder='Podaj imię...' />
                <label>Hasło</label>
                <input type="password" className='registerInput' placeholder='Wpisz hasło...' />
                <button className="registerButton">Zarejestruj</button>
                <Link to="/login"><button className="registerLoginButton">Logowanie</button></Link>
            </form>
        </div>
    )
}
