import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landindPage/home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './landindPage/signup/SignUp';
import About from './landindPage/about/AboutPage';
import ProductPage from './landindPage/products/ProductPage';
import Pricing from './landindPage/home/Pricing';
import SupportPage from './landindPage/support/SupportPage';
import Navbar from './landindPage/Navbar';
import Footer from './landindPage/Footer';
import NotFound from './landindPage/NotFound';
import PricingPage from './landindPage/pricing/PricingPage';
import 'react-toastify/dist/ReactToastify.css';
import Login from './landindPage/login/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='*' element={<NotFound />} />
       </Routes>

      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

