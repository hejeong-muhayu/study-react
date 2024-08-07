import {useState} from 'react'
import './App.css'
import Gallery from "./ui표현하기/Gallery.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Gallery/>
    </>
  )
}

export default App
