import { useEffect, useState } from 'react';
import Layout from './Layout/Layout';
import {UserAuthContextProvider} from './Context/useAuthContext'

function App() {
  const [loading, setLoading] = useState(true)
  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, it
  is used to set the initial value of the `loading` state to `true` and then after 4 seconds, set it
  to `false`. */
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  },[])
  return (
    <>
    {
      loading ? (
      <div className="container">
        <div className="loader"></div>
        <div className="loader"></div>
        <div className="loader"></div>
      </div>
      
      ) : (
        <section>
          <UserAuthContextProvider>
          <Layout />
          </UserAuthContextProvider>
        </section>
      )
    }
    </>
  )
}

export default App
