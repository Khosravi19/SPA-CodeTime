import './Login.css'
import { useState } from 'react';
import MyNavbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const submitHandler = () => {
        if (username == 'admin' && password == '12369') {
            navigate('/panel')
        } else {
            Swal.fire({
                title: '! error',
                text: 'نام کاربری یا رمز عبور اشتباه است',
                icon: 'error',
                confirmButtonText: 'بازگشت'
            })
        }
    }

    return (
        <>
            <MyNavbar />

            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input onChange={(e) => setUsername(e.target.value)} type="text" />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" />
                        <label>Password</label>
                    </div>
                    <button type='button' onClick={submitHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login;