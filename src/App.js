import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'

import AddItem from './components/AddItem'
import ViewList from './components/ViewList'
import UpdateItem from './components/UpdateItem'
import ViewItem from './components/ViewItem'

function App() {

    const [entity, setEntity] = useState(null)
    const [search, setSearch] = useState("")
    const [flag, setFlag] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://653f56889e8bd3be29e0557d.mockapi.io/perierat-inventum")
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log("Error in getting data\n", error)
            })
    }, [flag])

    return (
        <Router>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-5 fw-bold" to="/">Perierat Inventum</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-dark" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Lost</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/add-item-lost">Add Item</Link></li>
                                    <li><Link className="dropdown-item" to="/view-list-lost">View List</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-dark" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Found</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/add-item-found">Add Item</Link></li>
                                    <li><Link className="dropdown-item" to="/view-list-found">View List</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-5 border-black" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                        </form>
                    </div>
                </div>
            </nav>
            
            <Routes>
                <Route path="/" element={<ViewList category="lost found" search={search} data={data} setEntity={setEntity}/>} />

                <Route path="/add-item-lost" element={<AddItem category="lost" flag={flag} setFlag={setFlag}/>} />
                <Route path="/view-list-lost" element={<ViewList category="lost" search={search} data={data} setEntity={setEntity}/>} />

                <Route path="/add-item-found" element={<AddItem category="found" flag={flag} setFlag={setFlag}/>} />
                <Route path="/view-list-found" element={<ViewList category="found" search={search} data={data} setEntity={setEntity}/>} />

                <Route path="/update-item" element={<UpdateItem entity={entity} flag={flag} setFlag={setFlag}/>} />
                <Route path="/view-item" element={<ViewItem entity={entity} flag={flag} setFlag={setFlag}/>} />
            </Routes>
        </Router>
    );
}

export default App;