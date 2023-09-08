import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import { Wallet, CardGiftcard } from "@mui/icons-material";
import "./Dropdown.css";


export default function Dropdown() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <>
        <ul onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItem.map((item, index) => {
                return (
                    <li key={index}>
                        <Link 
                        className={item.cName} 
                        to={item.path} 
                        onClick={() => setClick(false)}
                        > 
                        {item.title}

                        <Wallet style={{ fontSize: 30 }} className='icon' />
                        {/* <CardGiftcard /> */}
                        </Link>  

                        {/* <Link 
                        className={item.cNa} 
                        to={item.path} 
                        onClick={() => setClick(false)}
                        > 
                        {item.title}

                        <CardGiftcard />
                        </Link>    */}
                    </li>

                            
                    );
            })}
        </ul>


    </>
  )
}



















































// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Wallet, CardGiftcard } from "@mui/icons-material";
// import "./Dropdown.css";
// import './Dropdown.css';

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="dropdown" onClick={toggleDropdown}>
//       <button>Toggle Dropdown</button>
//       {isOpen && (
//         <div className="dropdown-content">
//             <div>
//                 Wallet
//                 <Wallet />
//             </div>
//             <div>
//                 Card
//                 <CardGiftcard />
//             </div>
          
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;



































