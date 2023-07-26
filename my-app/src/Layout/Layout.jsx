import Routers from '../Router/Routers';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';


const Layout = () => {
  return (
    <>
      <Header />
       <div>
        <Routers />
       </div>
      <Footer /> 
    </>
  )
}

export default Layout