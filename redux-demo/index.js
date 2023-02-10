const redux = require('redux')
const reduxLogger = require('redux-logger')

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKES_RESTOCKED = 'CAKES_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

const createStore = redux.createStore
const logger = reduxLogger.createLogger()
const bindActionCreators = redux.bindActionCreators

const cakeInitialState = {
    numOfCake: 10,
}

const iceCreamInitialState = {
    numOfIceCream: 20
}

function orderCake() {
    return {
        type: CAKE_ORDERED
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKES_RESTOCKED,
        payload : qty
    }
}

function orderIceCream() {
    return {
        type: ICECREAM_ORDERED
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}
const cakeReducer = (state=cakeInitialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCake : state.numOfCake - 1,
            }
        case CAKES_RESTOCKED: {
            return {
                ...state,
                numOfCake: state.numOfCake + action.payload
            }
        }    
        default:
            return state
    }
}

const iceCreamReducer = (state=iceCreamInitialState, action) => {
    switch(action.type){
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + action.payload
            }
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        default:
            return state
    }
}

const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, redux.applyMiddleware(logger))
console.log('Initial State ', store.getState())

const unsubscribe = store.subscribe(() => {})

const actions = bindActionCreators({orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch)
actions.orderCake()
actions.restockCake(3)
actions.restockIceCream(10)
console.log('Num of cakes left: ', store.getState())

unsubscribe()
