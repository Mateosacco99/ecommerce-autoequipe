import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemCount from './components/ItemCount.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="Bienvenidos a AutoEquipe!" />
      <ItemCount />
    </>
  )
}

export default App
