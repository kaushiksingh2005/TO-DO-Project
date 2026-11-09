import './App.css'
import NavBar from './NavBar'
import { useState } from 'react'
import EditToDo from './EditToDo'
import GetMethod from './GetMethod'
import PostMethod from './PostMethod'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<GetMethod />} />
      <Route path="/addtodo" element={<PostMethod />} />
      <Route path="/edit/:id" element={<EditToDo />} />
      <Route path="*" element={<h1>Error-404 !! Page not found</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
