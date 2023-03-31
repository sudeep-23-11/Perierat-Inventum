import React from 'react'

import '../style/header.css'

export default function Header() {
    return (
        <div id='header'>
            <h1 id='lost-heading'>Perierat</h1>
            <h1 id='found-heading'>Inventum</h1>
            <input type="text" placeholder='Search' autoFocus />
            <img src="icons/search.svg" alt="loading" />
            <button id='lost-button' type='button'>Lost</button>
            <button id='found-button' type='button'>Found</button>
        </div>
    )
}