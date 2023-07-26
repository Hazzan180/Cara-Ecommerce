import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import Cart from '../Pages/Cart';
import About from '../Pages/About'
import ProductDetails from '../Pages/ProductDetails';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import WishList from '../Pages/wishList';
import Checkout from '../Pages/Checkout';
import Done from '../Pages/Done';
import ProtectedRoute from '../Router/ProtectedRoute'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='home'/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="shop/:id" element={<ProductDetails />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/wishList" element={<ProtectedRoute>
          <WishList />
        </ProtectedRoute>}/>
        <Route path="/checkout" element={<ProtectedRoute>
          <Checkout />
        </ProtectedRoute>}/>
        <Route path="/done" element={<ProtectedRoute>
          <Done />
        </ProtectedRoute>}/>
    </Routes>
  )
}

export default Routers