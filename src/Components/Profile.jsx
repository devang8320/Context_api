import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if (!user) return <div className="flex flex-col items-center p-4">user not fount </div>

    return <div className="flex flex-col items-center p-4"> Welcome {user.username}</div>
  
}

export default Profile
