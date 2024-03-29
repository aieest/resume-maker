import { useState } from 'react'
import './App.css'
import ResumeEditor from './resume-editor/resume-editor'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResumeEditor />
    </>
  )
}

export default App
