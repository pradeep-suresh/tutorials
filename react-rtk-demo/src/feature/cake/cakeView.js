import react, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ordered, restocked} from './cakeSlice'

const CakeView = () => {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()

    return (
        <Fragment>
            <h2>Num of Cakes : {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <button onClick={() => dispatch(restocked(3))}>Restock Cake</button>
        </Fragment>
    )
}

export default CakeView