import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetchingOne = () => {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState('')
    const [error, setError] = useState('')
    
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setError(error.message)
        })
    }, [])

    return (
        <div>
            <div> Post </div>
            {loading ? 'Loading' : post.title}
        </div>
    )
}

export default DataFetchingOne