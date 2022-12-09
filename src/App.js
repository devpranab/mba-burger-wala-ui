import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder/ConfirmOrder';
import PaymentSuccess from './components/Cart/PaymentSuccess/PaymentSuccess';
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
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;