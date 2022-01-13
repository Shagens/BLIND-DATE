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

import React from "react"
import "./Header.css"
// import profile from "../assets/cupid-pic.jpg"
function header (props) {
    console.log(props)
    return( 
        <div class="header">
        <h1>Cupids<span class="Blind Date">Blind Date</span></h1>
        {/* <img src={profile} className="Profile"></img> */}
        <nav>
            <ul>
                
                <li>
                    <a href="#" onClick={() => props.handlePageChange("Home")}> Home</a>
                </li>
                <li>
                    <a href="#" onClick={() => props.handlePageChange("TinderCards")}>Profile</a>
                </li>
                <li>
                    <a href="#" onClick={() => props.handlePageChange("Chat")}>Chat</a>
                </li>
                <li>
                    <a href="#" onClick={() => props.handlePageChange("Signup")}>Signup</a>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default header;