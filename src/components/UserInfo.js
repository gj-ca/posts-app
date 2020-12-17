import React from 'react'

const UserInfo = ({text, avatar, username, type}) => {
    return (
        <>
        <img style={{ height: "80px", width: "80px" }} src={avatar} />
        <div>
            {type == "comment" ? (<h4>{text}</h4>) : (<h1>{text}</h1>)}
            <p>By {username}</p>
        </div>
    </>
    )
}

export default UserInfo