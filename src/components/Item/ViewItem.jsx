import React from 'react'
import { Link } from 'react-router-dom'

import '../../style/view-item.css'

export default function ViewItem(props) {

    const image = props.entity.image ? props.entity.image : "./images/na.png"

    let deleteButton = () => {
        props.deleteHandler(props.entity)
    }

    return (
        <div id='view-item' style={{background: props.color.background, fontFamily: 'Poppins'}}>
            <div id='vi-item'>
                <h2>{props.entity.item}</h2>
                <h2>{props.entity.place}</h2>
                <h2>{props.entity.description}</h2>
            </div>
            <div id='vi-person'>
                <h2>{props.entity.name}</h2>
                <h2>{props.entity.phone}</h2>
                <h2>{props.entity.email}</h2>
            </div>
            <div id='vi-image'>
                <img src={image} alt="loading" />
            </div>
            <div id='vi-button'>
                <button type='button' style={{background: props.color.button, border: props.color.button}}><Link to="/update">Update</Link></button>
                <button type='button' style={{background: props.color.button, border: props.color.button}} onClick={deleteButton}><Link to="/">Delete</Link></button>
                <button type='button' style={{background: props.color.button, border: props.color.button}}><Link to="/">Cancel</Link></button>
            </div>
        </div>
    )
}