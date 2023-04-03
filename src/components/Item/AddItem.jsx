import React from 'react'
import { Link } from 'react-router-dom'

import '../../style/add-item.css'

export default function AddItem(props) {
    return (
        <div id='add-item' style={{background: props.color.background}}>
            <div id='ai-item'>
                <h1>Item {props.color.category}</h1>
                <label htmlFor="item"><h2>Item</h2></label>
                <input type="text" name='item' placeholder='Enter item' autoFocus />
                <label htmlFor="place"><h2>Place</h2></label>
                <input type="text" name='place' placeholder='Enter place' />
                <label htmlFor="description"><h2>Description</h2></label>
                <textarea name="description" placeholder='Enter description' cols="32" rows="4"></textarea>
            </div>
            <div id='ai-person'>
                <h1>{props.color.person}</h1>
                <label htmlFor="name"><h2>Name</h2></label>
                <input type="text" name='name' placeholder='Enter name' />
                <label htmlFor="phone"><h2>Phone Number</h2></label>
                <input type="tel" name='phone' placeholder='Enter phone number' maxLength={10} />
                <label htmlFor="email"><h2>Email</h2></label>
                <input type="email" name='email' placeholder='Enter email' />
            </div>
            <div id='ai-image'>
                <h1>Upload Image</h1>
                <input type="file" />
            </div>
            <div id='ai-button'>
                <button type='button' style={{background: props.color.button, border: props.color.button}}><Link to="/">Add</Link></button>
                <button type='button' style={{background: props.color.button, border: props.color.button}}><Link to="/">Cancel</Link></button>
            </div>
        </div>
    )
}