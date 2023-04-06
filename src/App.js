import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import './style/App.css'
import Header from './components/Header'
import Home from './components/Home'
import AddItem from './components/Item/AddItem'
import ViewItem from './components/Item/ViewItem'
import UpdateItem from './components/Item/UpdateItem'

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

  const [entity, setEntity] = useState(null)
  const [search, setSearch] = useState("")
  const [result, setResult] = useState(null)
  const [lostList, setLostList] = useState([])
  const [foundList, setFoundList] = useState([])

  let addHandler = (e) => {
    if (e.category === "Lost")
    setLostList([...lostList, {id: uuid(), ...e}])
    else
    setFoundList([...foundList, {id: uuid(), ...e}])
  }

  let deleteHandler = (e) => {
    if (e.category === "Lost")
    {
      const newLostList = lostList.filter((entity) => {
        return entity.id !== e.id
      })
      setLostList(newLostList)
    }
    else
    {
      const newFoundList = foundList.filter((entity) => {
        return entity.id !== e.id
      })
      setFoundList(newFoundList)
    }
  }

  let updateHandler = (e) => {
    if (e.category === "Lost")
    {
      const newLostList = lostList.map((entity) => {
        if (entity.id !== e.id) return entity
        else return e
      })
      setLostList(newLostList)
    }
    else
    {
      const newFoundList = foundList.map((entity) => {
        if (entity.id !== e.id) return entity
        else return e
      })
      setFoundList(newFoundList)
    }
  }

  useEffect(() => {
    if (search.length)
    {
      const newLostList = lostList.filter((entity) => {
        return Object.values(entity).join(" ").toLowerCase().includes(search.toLowerCase())
      })
      const newFoundList = foundList.filter((entity) => {
        return Object.values(entity).join(" ").toLowerCase().includes(search.toLowerCase())
      })
      setResult([newLostList, newFoundList])
    }
    else setResult(null)
  }, [search, lostList, foundList])
  
  useEffect(() => {
    const storedLostList = JSON.parse(localStorage.getItem(lostKey))
    if (storedLostList) setLostList(storedLostList)
    const storedFoundList = JSON.parse(localStorage.getItem(foundKey))
    if (storedFoundList) setFoundList(storedFoundList)
  }, [])
  useEffect(() => {
    localStorage.setItem(lostKey, JSON.stringify(lostList))
  }, [lostList])
  useEffect(() => {
    localStorage.setItem(foundKey, JSON.stringify(foundList))
  }, [foundList])

  return (
      <Router>
        <Header search={search} setSearch={setSearch}/>
        <Routes>
          <Route path='/' element={
            <Home color={[lost, found]} list={result ? result : [lostList, foundList]} setEntity={setEntity}/>
          } />
          <Route path='/lost' element={
            <AddItem color={lost} addHandler={addHandler}/>
          } />
          <Route path='/found' element={
            <AddItem color={found} addHandler={addHandler}/>
          } />
          {entity ? <Route path='/view' element={
              <ViewItem color={entity.category === "Lost" ? lost : found} entity={entity} deleteHandler={deleteHandler}/>
          }/> : null}
          {entity ? <Route path='/update' element={
              <UpdateItem color={entity.category === "Lost" ? lost : found} entity={entity} updateHandler={updateHandler}/>
          }/> : null}
        </Routes>
      </Router>
  );
}

export default App;