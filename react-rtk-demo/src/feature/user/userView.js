import { useSelector, useDispatch } from "react-redux"
import { fetchUsers } from './userSlice'
import { useEffect } from 'react'

const UserView = () => {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <h2> User List </h2>
            { user.loading && <div> Loading .. </div> }
            {!user.loading && user.error ? <div> Error: {user.error} </div> : null}
            {!user.loading && user.users.length ? (
                <ul>
                    {user.users.map(user => (
                        <li> {user.name} </li>
                    ))}
                </ul>
            ): null}
        </div>
    )
}

export default UserView