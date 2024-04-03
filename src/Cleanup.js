import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

const Cleanup = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
    // console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='main'>
      <div className='section'>
        <div className='head'>
          <h1>GitHub USERS</h1>
          <ul>
            {users.map((user) => {
              const { id, login, html_url, avatar_url } = user
              return (
                <li key={id}>
                  <img src={avatar_url} alt={login} />
                  <div className='details'>
                    <h3>{login}</h3>
                    <a href={html_url}>profile</a>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Cleanup
