import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder/ConfirmOrder';
import PaymentSuccess from './components/Cart/PaymentSuccess/PaymentSuccess';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import MyOrders from './components/MyOrders/MyOrders';
import OrderDetails from './components/MyOrders/OrderDetails';
import Users from './components/Admin/Users';
import Dashboard from './components/Admin/Dashboard';
import Orders from './components/Admin/Orders';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import './styles/app.scss';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/shipping" element={<Shipping/>}></Route>
        <Route path="/confirmorder" element={<ConfirmOrder/>}></Route>
        <Route path="/paymentsuccess" element={<PaymentSuccess/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/me" element={<Profile/>}></Route>
        <Route path="/myorders" element={<MyOrders/>}></Route>
        <Route path="/order/:id" element={<OrderDetails/>}></Route>
        <Route path="/admin" element={<Dashboard/>}></Route>
        <Route path="/admin/users" element={<Users/>}></Route>
        <Route path="/admin/orders" element={<Orders/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;