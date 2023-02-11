import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// Define the initial state 
const initialState = {
    loading: false,
    posts: {},
    error: ''
}

//Define the thunk 

export const fetchPosts = createAsyncThunk('posts/fetchPosts', (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
})

const postsSlice = createSlice({
    name : 'posts',
    initialState, 
    extraReducers: (build) => {
        build.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true
        })
        build.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload.data
        })
        build.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.message.error
        })
    }
})

export default postsSlice.reducer



