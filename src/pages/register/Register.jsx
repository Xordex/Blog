import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
    return (
        <div className='register'>
            <span className='registerTitle'>Register</span>
            <form className='registerForm'>
                <label>Email</label>
                <input type="text" className='registerInput' placeholder='Enter Your Email...' />
                <label>Username</label>
                <input type="text" className='registerInput' placeholder='Enter Your Username...' />
                <label>Password</label>
                <input type="password" className='registerInput' placeholder='Enter Your Password...' />
                <button className="registerButton">Register</button>
                <Link to="/login"><button className="registerLoginButton">Login</button></Link>
            </form>
        </div>
    )
}
