import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './style/App.css'
import Header from './components/Header'
import Home from './components/Home'
import AddItem from './components/Item/AddItem'

function App() {
  return (
      <Router>
        <Header />
        <Home />
      </Router>
  );
}

export default App;