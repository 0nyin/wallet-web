import React from 'react';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import "./App.css"
import Home from './component/pages/Home';
import OurSolutions from './component/pages/OurSolutions';
import AboutUs from './component/pages/AboutUs';
import Blog from './component/pages/Blog';
import Documentation from './component/pages/Documentation';
import GetInTouch from './component/pages/GetInTouch';
import EWallet from './component/pages/EWallet';
import Cards from './component/pages/Cards';



function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/our-solutions'  element={<OurSolutions/>} />
          <Route path='/e-wallet'  element={<EWallet/>} />
          <Route path='/Cards'  element={<Cards/>} />
          <Route path='/about-us'  element={<AboutUs/>} />
          <Route path='/blog'  element={<Blog/>} />
          <Route path='/documentation'  element={<Documentation/>} />
          <Route path='/get-in-touch'  element={<GetInTouch/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
