import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Foorter from './components/Foorter';
import Home from './components/Home';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import { UserStorage } from './UserContext';
import { CartStorage } from './CartContext';
import ProtectedRouter from './components/Helper/ProtectedRouter';
import Produto from './components/Produto/Produto';
import Produtos from './components/Produtos/Produtos';
import Lenis from '@studio-freight/lenis';

const App = () => {
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <CartStorage>
          <UserStorage>
            <Header />
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route
                path="cart/"
                element={
                  <ProtectedRouter>
                    <Cart />
                  </ProtectedRouter>
                }
              />
              <Route path="produto/:id" element={<Produto />} />
              <Route path="produtos/:id" element={<Produtos />} />
            </Routes>
            <Foorter />
          </UserStorage>
        </CartStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
