import React from 'react'
import '../css/Header.css'
import {Avatar} from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons/AccessTime" 
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import { Help } from '@material-ui/icons'

const Header = ({user}) => {
    return (
        <div className="header">
            <div className="headerLeft">
                {/* avatar for loggedin user */}
                {/* {time icon} */}
                <Avatar 
                    className="headerAvatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon />
            </div>
            <div className="headerSearch">
                <SearchIcon />
                <input placeholder="Search" />
            </div>
            <div className="headerRight">
                <HelpOutlineIcon />

            </div>
        </div>
    )
}

export default Header
