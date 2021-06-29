import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import 'regenerator-runtime/runtime.js'

import '../css/App.css'

import { actions } from '../store'

import Landing from './Landing'

function App() {
  const dispatch = useDispatch()

  const action = useSelector((state) => state.action)
  const { title } = action

  useEffect(() => {
    dispatch(actions())
  }, [dispatch])

  return (
    <div>
      <Landing />
    </div>
  )
}

export default App
