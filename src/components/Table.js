import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export default function Table() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchUsers() {
            let response = await fetch('https://jsonplaceholder.typicode.com/users')
            response = await response.json()
            setUsers(response)
        }
        fetchUsers()
    }, [])

    return (
        <div id="tableContainer">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => {
                    return (
                        <tr key={user.id}>
                            <td><Link to={`/posts/${user.id}`}>{user.name}</Link></td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}
