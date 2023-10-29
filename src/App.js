import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import AddItem from './components/AddItem'
import ViewList from './components/ViewList'
import ViewItem from './components/ViewItem'

function App() {

    const data = {
        item: "", place: "", description: "",
        name: "", phone: "", email: "",
        image: null
    };

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
                            <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn me-5" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            
            <Routes>
                <Route path="/" element={<ViewList category="both"/>} />
                <Route path="/add-item-lost" element={<AddItem category="lost" op="add" data={data}/>} />
                <Route path="/view-list-lost" element={<ViewList category="lost"/>} />
                <Route path="/add-item-found" element={<AddItem category="found" op="add" data={data}/>} />
                <Route path="/view-list-found" element={<ViewList category="found"/>} />
                <Route path="/view-item" element={<ViewItem />} />
            </Routes>
        </Router>
    );
}

export default App;