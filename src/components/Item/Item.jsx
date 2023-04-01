import React from 'react'

import '../../style/item.css'

export default function Item(props) {
    return (
        <div id='item' style={{background: props.color.background}}>
            <h1>Milton Bottle</h1>
            <h3>Water cooler near canteen ground floor</h3>
            <div>
                <img src="./download.png" alt="loading" />
            </div>
        </div>
    )
}