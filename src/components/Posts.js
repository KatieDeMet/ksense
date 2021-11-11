import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import {Link} from 'react-router-dom'

export default function Posts() {
    const [posts, setPosts] = useState([])

    let params = useParams()

    useEffect(() => {
        async function fetchUsers() {
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
            response = await response.json()
            setPosts(response)
        }
        fetchUsers()
    }, [params.id])

    return (
        <div id="postContainer">
            <Link to="/">Return to users</Link>
            <h2>Current Posts</h2>
            <div id="posts">
                {posts.map(post => {
                    return (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    )
                })}
          </div>
        </div>
    )
}
