import React, { useEffect, useReducer } from 'react'
import axios from 'axios'


const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_FAILURE = 'FETCH_FAILURE'

const initialState = {
    loading : true,
    post : {},
    error: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_SUCCESS :
            return {
                loading : false,
                post: action.payload,
                error: ''
            }
        case FETCH_FAILURE:
            return {
                loading: true,
                post: {},
                error: action.payload
            }
    } 
}

const DataFetchingTwo = () => {
    const [post, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type: FETCH_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({type: FETCH_FAILURE, payload: error.message})
        })
    }, [])

    return (
        <div>
        <div> Post </div>
        <div> {post.post.title} </div>    
        </div>
    )
}

export default DataFetchingTwo