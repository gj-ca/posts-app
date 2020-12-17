import React from 'react'
import UserInfo from './UserInfo'

const Header = ({avatar, name, title}) => {
    return (
        <header style={{display: "flex", alignItems: "center"}}>
            <UserInfo text={title} username={name} avatar={avatar} />
        </header>
    )
}

export default Header