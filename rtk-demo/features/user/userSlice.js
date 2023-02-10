const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState = {
    loading: false,
    user : [],
    error: ''
}

// Returns pending, fulfilled and rejected
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
            state.user = action.payload.data.map((user) => user.id)
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload.message
        })
    }
})


module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers