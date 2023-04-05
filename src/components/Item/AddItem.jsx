import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../style/add-item.css'

export default function AddItem(props) {

    const [item, setItem] = useState("")
    const [place, setPlace] = useState("")
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState(null)

    let imageHandler = (event) => {
        const image = event.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(image)
        reader.addEventListener("load", () => {
            setImage(reader.result)
        })
    }

    let addButton = () => {
        props.addHandler({
            category: props.color.category,
            item: item, place: place, description: description,
            name: name,  phone: phone, email: email,
            image: image
        })
    }

    return (
        <div id='add-item' style={{background: props.color.background}}>
            <div id='ai-item'>
                <h1>Item {props.color.category}</h1>
                <label htmlFor="item"><h2>Item</h2></label>
                <input type="text" name='item' placeholder='Enter item' autoFocus value={item} onChange={(e) => setItem(e.target.value)}/>
                <label htmlFor="place"><h2>Place</h2></label>
                <input type="text" name='place' placeholder='Enter place' value={place} onChange={(e) => setPlace(e.target.value)}/>
                <label htmlFor="description"><h2>Description</h2></label>
                <textarea name="description" placeholder='Enter description' cols="32" rows="4" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div id='ai-person'>
                <h1>{props.color.person}</h1>
                <label htmlFor="name"><h2>Name</h2></label>
                <input type="text" name='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="phone"><h2>Phone Number</h2></label>
                <input type="tel" name='phone' placeholder='Enter phone number' maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <label htmlFor="email"><h2>Email</h2></label>
                <input type="email" name='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div id='ai-image'>
                <h1>Upload Image</h1>
                <input type="file" onChange={imageHandler} />
                {image ? <img src={image} alt="loading" /> : null}
            </div>
            <div id='ai-button'>
                <button type='button' style={{background: props.color.button, border: props.color.button}} onClick={addButton}><Link to="/">Add</Link></button>
                <button type='button' style={{background: props.color.button, border: props.color.button}}><Link to="/">Cancel</Link></button>
            </div>
        </div>
    )
}