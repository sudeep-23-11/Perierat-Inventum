import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../style/header.css'

export default function Header(props) {

    const [search, setSearch] = useState("")
    useEffect(() => {
        props.searchHandler(search)
    }, [search])

    return (
        <div id='header'>
            <h1 id='lost-heading'>Perierat</h1>
            <h1 id='found-heading'>Inventum</h1>
            <input type="search" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>
            <img src="icons/search.svg" alt="loading" />
            <button id='lost-button' type='button'><Link to="/lost">Lost</Link></button>
            <button id='found-button' type='button'><Link to="/found">Found</Link></button>
        </div>
    )
}