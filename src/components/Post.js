import React from 'react'
import Header from './Header'
import Comment from './Comment'

const Post = (props) => {
    const {post} = props
    const {title, content, user, comments, id}= post
    const {avatar, name}= user 
    return (
        <div style={{backgroundColor: "white", border: "solid 1px black", marginBottom: "20px", padding: "10px"}}>
            <Header name={name} avatar={avatar} title={title} />
            <p>{content}</p>
            <section>
                {comments && comments.map((comment, index) => (
                    <Comment comment={comment} index={index} key={index} />
                ))}
            </section>
        </div>
    )
}

export default Post