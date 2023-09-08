import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/radon.png";
import { Button } from '../button/Button';
import "./Navbar.css";
import Dropdown  from '../Dropdown';



export default function Navbar() {

    const [click , setClick] = useState(false);
    const [button , setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);
   


    const handleClick = () => setClick (!click)
    const closeMobileMenu = () => setClick (false)

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(true);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };


    const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }

    };

    window.addEventListener('resize', showButton);



  return (
    <>
      <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                   
                   <img src={image} alt="" width="40px" className='img-logo' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} /> 
                      
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-items'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to="/#" className='nav-links' onClick={closeMobileMenu}>
                                    Our Solutions
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-items'
                        
                        >
                        <Link to="/#" className='nav-links' onClick={closeMobileMenu}>
                                 About Us 
                        </Link>
                       
                    </li>
                    <li className='nav-items'>
                        <Link to="/#" className='nav-links' onClick={closeMobileMenu}>
                                Blog
                        </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to="/#" className='nav-links' onClick={closeMobileMenu}>
                                Documentation
                        </Link>
                    </li>
                    <li className='nav-items'>
                         <Link to="/get-in-touch" className='nav-links-mobile' onClick={closeMobileMenu}>
                                Get in touch
                        </Link> 
                    </li> 
                </ul>
                    
                       {button && <Button buttonStyle="btn--primary">Get in touch</Button>}
                    
            </div>
        </nav>
     
    </>
  )
}
