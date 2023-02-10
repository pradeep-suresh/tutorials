const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

// Define actions as strings
const FETCH_USER_IDS_REQUESTED = 'FETCH_USER_IDS_REQUESTED'
const FETCH_USER_IDS_SUCCESS = 'FETCH_USER_IDS_SUCCESS'
const FETCH_USER_IDS_FAILURE = 'FETCH_USER_IDS_FAILURE'

// Define initial state for the reducer
const usersInitialState = {
    loading: false,
    userIds : [],
    error: '',
}

// Define action creators returning objects
function fetchUserIds() {
    return {
        type: FETCH_USER_IDS_REQUESTED
    }
}

function fetchUserIdsSuccess(userIds=[]) {
    return {
        type: FETCH_USER_IDS_SUCCESS,
        payload: userIds
    }
}

function fetchUserIdsFailure(error) {
    return {
        type: FETCH_USER_IDS_FAILURE,
        payload: error
    }
}

// Define reducer
const userIdsReducer = (state=usersInitialState, action) => {
    switch(action.type) {
        case FETCH_USER_IDS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_IDS_SUCCESS:
            return {
                ...state,
                loading: false,
                userIds: action.payload
            }
        case FETCH_USER_IDS_FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload
            }
        default: 
            return state
    }
}

const usersUrl = 'https://jsonplaceholder.typicode.com/users'

const fetchUsers = () => { 
    return function(dispatch) {
        dispatch(fetchUserIds)
        axios.get(usersUrl)
        .then((response) => {
            const users = response.data.map((user) => user.id)
            dispatch(fetchUserIdsSuccess(users))
        })
        .catch((error) => {
            dispatch(fetchUserIdsFailure(error.message))
        })
    }
}

const store = redux.createStore(userIdsReducer, redux.applyMiddleware(thunkMiddleware, logger))

store.dispatch(fetchUsers())





