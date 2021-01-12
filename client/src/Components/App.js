import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'regenerator-runtime/runtime.js'

import '../css/App.css'

function App() {
  const [title, setTitle] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('/api')
      setTitle(data.title)
    }
    fetch()
  }, [])

  return (
    <div>
      <h1>{title}</h1>
      <img src='/public/images/react.png' />
    </div>
  )
}

export default App
