import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import './styles/app.scss';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;