import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div className="flex flex-col items-center p-4">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              className="border border-gray-400 rounded p-2"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="border border-gray-400 rounded p-2"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white rounded px-4 py-2 mt-2 hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      );
    }

export default Login