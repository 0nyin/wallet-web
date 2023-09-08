import React from 'react'
import { Button } from '../button/Button';
import './Herro.css'



export default function Herro() {
  return (
    <>
      <div className='blocck-container'>
        <div className='block'>
            <p>Laying the blocks for the Future of African Financial Services</p>
        </div>

        <div className='words'>
          <p>Shorten—route—to—market with everything you need to
            launch and grow your products.
          </p>
        </div>
      
         <Button buttonSize="btn--medium" className="tonn">
          Get in touch
          
          </Button>

        {/* <div class="word-changer">
              <span class="word">Word 1</span>
              <span class="word">Word 2</span>
              <span class="word">Word 3</span>
            </div> */}
      </div>
    </>
  )
}
