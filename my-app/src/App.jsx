import { useEffect, useState } from 'react';
import Layout from './Layout/Layout';
import {UserAuthContextProvider} from './Context/useAuthContext'

function App() {
  const [loading, setLoading] = useState(true)
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
