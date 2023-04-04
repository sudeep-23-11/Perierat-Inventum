import React from 'react'
import { Link } from 'react-router-dom'

import '../../style/item.css'

export default function Item(props) {

    const image = props.entity.image ? props.entity.image : "./images/na.png"

    let clickButton = () => {
        props.viewHandler(props.entity)
    }

    return (
        <div id='item' style={{background: props.color.background}}>
            <h1 onClick={clickButton}><Link to="/view" style={{color: "#000000"}}>{props.entity.item}</Link></h1>
            <h3>{props.entity.place}</h3>
            <img src={image} alt="loading" />
        </div>
    )
}