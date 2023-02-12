import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PostsView = () => {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(response => {
           setPost(response.data)
       })
       .catch(error => {
           console.log(error.message)
       }) 
    },[idFromButtonClick])

    return (
        <div>
            <h2> Posts </h2>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button onClick={ () => setIdFromButtonClick(id)}> Get Post!</button> 
            <ul>
                <li>{post.title}</li>
            </ul>
        </div>
    )
}

export default PostsView