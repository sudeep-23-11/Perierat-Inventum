import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function AddItem(props) {

    const bgc = props.category==="lost" ? "#FCAEAE" : "#D0E7D2";
    const tc = props.category==="lost" ? "#FE0000" : "#618264";

    const [item, setItem] = useState("")
    const [place, setPlace] = useState("")
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState(null)

    let imageHandler = (e) => {
        const image = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(image)
        reader.addEventListener("load", () => {
            setImage(reader.result)
        })
    }

    let addHandler = () => {
        axios.post("https://653f56889e8bd3be29e0557d.mockapi.io/perierat-inventum", {
            category: props.category,
            item: item, place: place, description: description,
            name: name, phone: phone, email: email,
            image: image ? image : "./icons/na.png"
        })
        .then((response) => {
            props.setFlag(!props.flag);
        })
        .catch((error) => {
            console.log("Error in posting data\n", error)
        })
    }

    return (
        <div className="container-fluid d-flex flex-row align-items-center" style={{minHeight: "100vh", backgroundColor: bgc, color: tc}}>
            <div className="container w-25">
                <label className='fw-bold' htmlFor="item">Item</label>
                <input className='d-block rounded w-75 mb-3' type="text" name='item' placeholder='Enter item' autoFocus value={item} onChange={(e) => setItem(e.target.value)}/>
                <label className='fw-bold' htmlFor="place">Place</label>
                <input className='d-block rounded w-75 mb-3' type="text" name='place' placeholder='Enter place' value={place} onChange={(e) => setPlace(e.target.value)}/>
                <label className='fw-bold' htmlFor="description">Description</label>
                <textarea className='d-block rounded mb-3' name="description" placeholder='Enter description' cols="33" rows="4" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <label className='fw-bold' htmlFor="name">Name</label>
                <input className='d-block rounded w-75 mb-3' type="text" name='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}/>
                <label className='fw-bold' htmlFor="phone">Phone Number</label>
                <input className='d-block rounded w-75 mb-3' type="tel" name='phone' placeholder='Enter phone number' maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <label className='fw-bold' htmlFor="email">Email</label>
                <input className='d-block rounded w-75 mb-3' type="email" name='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button type="button" className='btn me-3' style={{backgroundColor: tc}} onClick={addHandler}><Link className='text-light text-decoration-none' to="/">Add</Link></button>
                <button type="button" className='btn' style={{backgroundColor: tc}}><Link className='text-light text-decoration-none' to="/">Cancel</Link></button>
            </div>
            <div className="container w-25">
                <label className='fw-bold' htmlFor="image">Upload Image</label>
                <input className='d-block' type="file" name='image' onChange={imageHandler} />
                {
                    image ? <img className='h-100 w-100 mt-3' src={image} alt="loading" />
                    : null
                }
            </div>
        </div>
    )
}