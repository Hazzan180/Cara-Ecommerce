import React, { useState } from 'react';
import '../Style/signup.css'

import Helment from '../Component/Helment/Helment'
import img from '../assets/images/empty/login.png'
import {toast} from 'react-toastify'

import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import {useUserAuth} from '../Context/useAuthContext'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {signUp} = useUserAuth()

  const navigate = useNavigate()

  const handuleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signUp(email, password);
      setLoading(false);
      toast.success('Account created');
      navigate('/login');
      // Redirect to your desired page after successful signup
    } catch (err) {
      toast.error(err.message);
      setLoading(false); 
    }

  }

  return (
    <Helment title='SignUp'>
    <section className='form-body'>
      {
        loading ? (
          <h1>Loding</h1>
        ) : (
          <div className='form-container'>
     <div className='form-header'>
       <img src={img} />
       <h2>SignUp</h2>
     </div>
     <form onSubmit={handuleSubmit}>
     <div className='form-group'>
     <input
        type="email"
        placeholder="Enter Email"
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
       <button className='login-btn' type="submit">Signup</button>
       <p>Already have an account? <Link to='/login'>Login</Link></p>
     </form>
     </div>
        )
      }
    </section>
 </Helment>
  );
};

export default Signup;
