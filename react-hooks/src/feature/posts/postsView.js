import react, { useEffect, useState } from 'react'
import { fetchPosts } from './postsSlice'
import { useSelector, useDispatch } from "react-redux"



const PostsView = () => {
    const dispatch = useDispatch()
    const post = useSelector(state => state.post)
    const [postId, setPostId] = useState([])




    return(
        <div>
            <h1> Post </h1>
            <input type="text" value={postId} onChange={(event) => setPostId(event.target.value)}/>
            <button onClick={ () => dispatch(fetchPosts(postId))}> Get Post! </button>
            {post.loading && <div>Fetching ... </div>}
            {!post.loading &&
            <ul>
                <li> {post.posts.title} </li>
            </ul>}
        </div>
    )
}

export default PostsView