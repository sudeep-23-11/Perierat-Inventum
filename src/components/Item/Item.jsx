import React from 'react'
import { Link } from 'react-router-dom'

import '../../style/item.css'

export default function Item(props) {

    const image = props.entity.image ? props.entity.image : "./images/na.png"

    let viewButton = () => {
        props.setEntity(props.entity)
    }

    return (
        <div id='item' style={{background: props.color.background, fontFamily: 'Poppins',}}>
            <h1 onClick={viewButton}><Link to="/view" style={{color: "#000000"}}>{props.entity.item}</Link></h1>
            <h3>{props.entity.place}</h3>
            <img src={image} alt="loading" />
        </div>
    )
}