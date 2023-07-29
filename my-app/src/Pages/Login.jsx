/* The code is importing various modules and components from different files and libraries. */
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

  /* The code is using the `useState` hook from React to create three state variables: `email`,
  `password`, and `loading`. */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {logIn, googleSignIn} = useUserAuth()

  const navigate = useNavigate()

 /**
  * The function `handleSubmit` is an asynchronous function that handles form submission, logs in the
  * user, and redirects them to the checkout page if successful.
  */
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

  /**
   * The function `handuleGoogleSignin` is an asynchronous function that handles the Google sign-in
   * process, displays success or error messages using toast notifications, and redirects the user to
   * the checkout page upon successful sign-in.
   */
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

  /* The `return` statement in the code is rendering JSX elements to be displayed on the webpage. */
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