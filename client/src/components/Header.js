import React from "react";
import "./Header"
import PersonIcon from "@material-ui/icons/Person";
import InboxIcon from '@material-ui/icons/Inbox';

function Header() {
    return (
        <div className="header">
            <PersonIcon />
            <h2>BLIND-DATE</h2>
            <InboxIcon />
        </div>
    );
}

export default Header;