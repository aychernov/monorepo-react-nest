import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [text, setText] = useState('')

    useEffect(() => {
        fetch('/api')
            .then((res) => res.text())
            .then(setText)
    }, [])
  return (
    <>
        <h1>{text}!</h1>
    </>
  )
}

export default App
