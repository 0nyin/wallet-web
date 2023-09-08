import React from 'react'
import { Link } from 'react-router-dom'
import image from "../../assets/radon.png";
import { Button } from '../button/Button';
import { LocationOn , Email , Phone } from "@mui/icons-material";
import './Footerr.css'

function Footerr() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subcription-heading'>
            join the leading Fin tech company to receive our newsletter information
        </p>
        <p className='footer-subcription-text'>
            you can unsubcribe at anytime
        </p>
        <div className='input-area'>
            <form>
                <input 
                    type='email'
                    name='email'
                    placeholder='your Email'
                    className='footer-input'
                />
                <Button buttonStyle='btn--primary'>Subscribe</Button>
            </form>
        </div>
      </section>

      <div className='addres'>
          <div className='contact-addres'>
            < LocationOn className='loca' />
            <p className='floor'>1st floor Festac Tower, 22 
              Road Festac, Festac Town 102312, Lagos</p>
          </div>

          <div className='email'>
            < Email className='emai' />
            <p className='con-email'> joelezeu@gmail.com</p>
          </div>

          <div className='phone'>
            < Phone className='phon' />
            <p className='con-phone'> <b>+234</b> 8138249630 </p>
          </div>
        </div>
     
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src={image} alt="" width="40px" className='img-logo' />
            </Link>
          </div>
          <medium className='website-rights'> Radon Technologies &copy; 2023</medium>
          <div className='social-icons'>
            <Link
             className='social-icon-link facebook'
              to='/'
              target='_blank'
               aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
             className='social-icon-link instagram'
              to='/'
              target='_blank'
               aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
             className='social-icon-link youtube'
              to='/'
              target='_blank'
               aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
             className='social-icon-link twitter'
              to='/'
              target='_blank'
               aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
             className='social-icon-link linkedin'
              to='/'
              target='_blank'
               aria-label='Linkedin'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footerr

