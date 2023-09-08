import React from 'react'
import image from "../../assets/fman.jpg";
import { Wallet, Lens} from "@mui/icons-material";
import "./Feed.css"

export default function Feed() {
  return (
    <div className='container-feed'>
      <div className='feed'>
      <div className='build'>
        <h3>We make it easy for you to build
          as a customer the wallet you love
        </h3>
      </div>

      <div className='launch'>
        <p>Launch innovative banking services using our infrastructure solutions,
          licenses, and understanding of the landscape.
        </p>
      </div>

      <div className='group'>
        <div className='img-width'>
        <img src={image} width='500px' height='400px' className='img' />
        <Lens  className='lens' style={{ fontSize: 150 }}  />
        </div>

       

        <div className='wallet'>
        <Wallet className='wallet-icon'  />
        {/* style={{ fontSize: 35 }} */}
        <div className='wallet-group'>
        <h3>Wallet</h3>
        <p className='cus'>Your customers can receive, transfer and manage funds like normal accounts.</p>
        </div>
        </div>

       


      </div>


      </div> 
      
    </div>
  )
}




 {/* <div className='tiza'>
        <AttachMoney  style={{ fontSize: 35 }} className='money-icon' />
        <span className='virt'>
        <h3>Payment</h3>
        <p>Your customers can receive, transfer and manage funds like normal accounts.
        </p>
        </span>
        </div> */}



         {/* <div className='card'>
        <CardTravel className='card-icon'  style={{ fontSize: 35 }} />
        <span className='card-group'>
        <h3>Card Insurance</h3>
        <p>Your customers can receive, transfer and manage funds like normal accounts.
        </p>
        </span>
        </div> */}