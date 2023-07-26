import React, {useState} from 'react'
import '../Style/login.css'

import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import Helment from '../Component/Helment/Helment'

import img from '../assets/images/empty/signup.png'
import logo from '../assets/images/empty/logo.png'
import {toast} from 'react-toastify'

import {useUserAuth} from '../Context/useAuthContext'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {logIn, googleSignIn} = useUserAuth()

  const navigate = useNavigate()

  const handuleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await logIn(email, password);
      setLoading(false);
      toast.success('Logged in successfully');
      navigate('/checkout');
      // Redirect to your desired page after successful signup
    } catch (err) {
      toast.error(err.message);
      setLoading(false); 
    }
  }

  const handuleGoogleSignin = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn()
      toast.success('Logged in successfully');
      navigate('/checkout');
      // Redirect to your desired page after successful signup
    } catch (err) {
      toast.error(err.message);
      setLoading(false); 
    }
  }

  return (
    <Helment title='Login'>
       <section className='form-body'>
        {
          loading ? (
            <h1>loading</h1>
          ) : (
            <div className='form-container'>
        <div className='form-header'>
          <img src={img} />
          <h2>Login</h2>
        </div>
        <form onSubmit={handuleSubmit}>
          <div className='form-group'>
          <input
           type="email"
           placeholder="Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
          />
          </div>
          <div className='form-group'>
          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
          </div>

          <button className='login-btn' type="submit">Login</button>
          <p>Don't have an account? <Link to='/signup'>Signup</Link></p>

          <div className="line"></div>
        </form>
        <button className='form-group form-flex'>
            <img src={logo} alt="" className='google-img'/>
            <strong className='text' onClick={ handuleGoogleSignin}>Login with Google</strong>
          </button>
        </div>
          )
        }
       </section>
    </Helment>
  )
}

export default Login