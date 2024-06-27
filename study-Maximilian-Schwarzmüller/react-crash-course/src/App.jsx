import {useState} from 'react'
import './App.css'
import Post from "./components/Post.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Post/>
  )
}

export default App
