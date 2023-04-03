import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './style/App.css'
import Header from './components/Header'
import Home from './components/Home'
import AddItem from './components/Item/AddItem'

function App() {

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

  return (
      <Router>
        <Header />
        {/* <Home color={[lost, found]}/> */}
        {/* <AddItem color={found}/> */}
        <AddItem color={lost}/>
      </Router>
  );
}

export default App;