import React from 'react'
import UserInfo from './UserInfo'

const Comment = ({comment}) => {
    const {avatar, text, username} = comment
    return (
        <article style={{border: "solid 1px black", marginBottom: "20px", padding: "10px", display: "flex", alignItems: "center"}}>
            <UserInfo text={text} avatar={avatar} username={username} type="comment" />
        </article>
    )
}

export default Comment