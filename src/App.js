import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import './style/App.css'
import Header from './components/Header'
import Home from './components/Home'
import AddItem from './components/Item/AddItem'

function App() {

  const lostKey = process.env.REACT_APP_LOST_KEY
  const foundKey = process.env.REACT_APP_FOUND_KEY

  const lost = {
    category: "Lost",
    person: "Owner",
    button: "#DC3545",
    background: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)"
  }
  const found = {
      category: "Found",
      person: "Finder",
      button: "#157347",
      background: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)"
  }

  const [lostList, setLostList] = useState([])
  const [foundList, setFoundList] = useState([])

  let addHandler = (entity) => {
    if (entity.category === "Lost")
    setLostList([...lostList, {id: uuid(), ...entity}])
    else
    setFoundList([...foundList, {id: uuid(), ...entity}])
  }

  useEffect(() => {
    const storedLostList = JSON.parse(localStorage.getItem(lostKey))
    if (storedLostList)
    setLostList(storedLostList)
    const storedFoundList = JSON.parse(localStorage.getItem(foundKey))
    if (storedFoundList)
    setFoundList(storedFoundList)
  }, [lostKey, foundKey])
  useEffect(() => {
    localStorage.setItem(lostKey, JSON.stringify(lostList))
  }, [lostList, lostKey])
  useEffect(() => {
    localStorage.setItem(foundKey, JSON.stringify(foundList))
  }, [foundList, foundKey])

  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={
            <Home color={[lost, found]} list={[lostList, foundList]}/>
          } />
          <Route />
          <Route path='/lost' element={
            <AddItem color={lost} addHandler={addHandler}/>
          } />
          <Route /><Route path='/found' element={
            <AddItem color={found} addHandler={addHandler}/>
          } />
          <Route />
        </Routes>
      </Router>
  );
}

export default App;