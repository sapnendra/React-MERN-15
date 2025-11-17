import React from 'react'
import { useContext } from 'react'
import MyStore from './context/CreateContext'

const App = () => {
  const data = useContext(MyStore)
  return (
    <div>App: {data}</div>
  )
}

export default App