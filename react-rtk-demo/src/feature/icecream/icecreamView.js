import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from './icecreamSlice' 

export const  IceCreamView = () => {

    const numOfIceCream = useSelector(state => state.icecream.numOfIcecream)
    const dispatch = useDispatch()

    return (
        <div>
            <h2> Num of Icecream : {numOfIceCream}</h2>
            <button onClick={ () => dispatch(ordered())}> Order Icecream </button>
            <button onClick={ () => dispatch(restocked(5))}> Restock Icecream </button>
        </div>
    )
}

export default IceCreamView