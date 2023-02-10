import { configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import cakeReducer from '../feature/cake/cakeSlice'
import icecreamReducer from '../feature/icecream/icecreamSlice'
import userReducer from '../feature/user/userSlice'

const store = configureStore({
    reducer : {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store



