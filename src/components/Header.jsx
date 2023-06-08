import React from 'react'
import { Link } from 'react-router-dom'

import '../style/header.css'

export default function Header(props) {
    return (
        <div id='header' style={{fontFamily: 'Poppins',}} >
            <h1 id='lost-heading'>Perierat</h1>
            <h1 id='found-heading'>Inventum</h1>
            <input type="search" placeholder='Search' value={props.search} onChange={(e) => props.setSearch(e.target.value)}/>
            <img src="./icons/search.svg" alt="loading" />
            <button id='lost-button' type='button'><Link to="/lost">Lost</Link></button>
            <button id='found-button' type='button'><Link to="/found">Found</Link></button>
        </div>
    )
}