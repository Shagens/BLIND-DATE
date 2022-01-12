// import React from 'react'
// import "./Header.css"
// import PersonIcon from '@material-ui/icons/Person'
// import { IconButton } from '@material-ui/core'
// import ForumIcon from '@material-ui/icons/Forum'

// const Header = () => {
//     return (
//         <div className="header">
//             <IconButton>
//                 <PersonIcon fontSize='large' className="header__icon" />
//             </IconButton>
//             <img className="header__logo" src="" alt="header" />
//             <IconButton>
//                 <ForumIcon fontSize='large' className="header__icon" />
//             </IconButton>
//         </div>
//     )
// }

// export default Header

import React from 'react';
import profile from "../assets/cupid-pic.jpg"
import "./Header.css";
export default function Header() {
    return (
        <header className='Header'>
            <img src={profile} className="profile"/>
            <nav className='Nav'>
                <a href='/'>Profile</a>
                <a href='/'>Log In</a>
                <a href='/'>Matches</a>
                <a href='/'>Settings</a>
                <button>Logout</button>
            </nav>
        </header>
    );
}