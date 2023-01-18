import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
       <Navbar/>

       <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
