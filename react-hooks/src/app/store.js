import {configureStore} from '@reduxjs/toolkit'
import postsReducer from '../feature/posts/postsSlice' 

const store = configureStore({
    reducer: {
        post: postsReducer
    }
})

export default store

