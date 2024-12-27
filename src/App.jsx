import { useState } from 'react'
import Login from './Components/login'
import Profile from './Components/profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
