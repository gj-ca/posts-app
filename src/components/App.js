import React from 'react'
import Post from './Post'

const App = () => {
    let posts = [
        {
            id: 1,
            title: "First Post",
            content: "Whats the weather like?",
            user: {
                name: "Paul",
                avatar: "http://bitly.ws/aPwQ",
            },
            comments: [
                {
                    text: "Trash post",
                    username: "n00b5lay3r69",
                    avatar: "http://bitly.ws/aPwS"
                }, {
                    text: "Mods pls report this",
                    username: "Paul'sMum",
                    avatar: "http://bitly.ws/aPwU"
                }, {
                    text: "Weather is good thanks",
                    username: "John",
                    avatar: "http://bitly.ws/aPwV"
                }
            ]
        }, {
            id: 2,
            title: "Pineapples on Pizza. Discuss",
            content: "Read title",
            user: {
                name: "John",
                avatar: "http://bitly.ws/aPwV"
            },
            comments: [
                {
                    text: "hitler put pineapples on his pizza",
                    username: "n00b5lay3r69",
                    avatar: "http://bitly.ws/aPwS"
                }, {
                    text: "hitler didn't eat pizza, troll",
                    username: "John",
                    avatar: "http://bitly.ws/aPwV"
                }, {
                    text: "pineapples belong on SOME pizzas",
                    username: "Alex",
                    avatar: "http://bitly.ws/aPxd",
                }
            ]
        }, {
            id: 3,
            title: "Test Post pls ignore",
            content: "just testing?",
            user: {
                name: "Paul",
                avatar: "http://bitly.ws/aPwQ"
            }
        }
    ]
    return (
        <div style={{padding: "20px"}}>
            {posts.map((post, index) => (
                <Post key={index} post={ post }/>
            ))}
        </div>
    )
}

export default App 