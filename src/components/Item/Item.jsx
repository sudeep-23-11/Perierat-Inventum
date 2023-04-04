import React from 'react'

import '../../style/item.css'

export default function Item(props) {

    const image = props.entity.image ? props.entity.image : "./images/na.png"

    return (
        <div id='item' style={{background: props.color.background}}>
            <h1>{props.entity.item}</h1>
            <h3>{props.entity.place}</h3>
            <img src={image} alt="loading" />
        </div>
    )
}