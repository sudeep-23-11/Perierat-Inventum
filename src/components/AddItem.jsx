import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AddItem(props) {

    const [category, setCategory] = useState(props.category)
    const [op, setOp] = useState(props.op)
    const [item, setItem] = useState(props.data.item)
    const [place, setPlace] = useState(props.data.place)
    const [description, setDescription] = useState(props.data.description)
    const [name, setName] = useState(props.data.name)
    const [phone, setPhone] = useState(props.data.phone)
    const [email, setEmail] = useState(props.data.email)
    const [image, setImage] = useState(props.data.image)

    let imageHandler = (e) => {
        const image = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(image)
        reader.addEventListener("load", () => {
            setImage(reader.result)
        })
    }

    let addHandler = () => {
        
    }
    let updateHandler = () => {
        
    }

    return (
        <div className="container-fluid d-flex flex-row align-items-center" style={{minHeight: "100vh"}}>
            <div className="container w-25">
                <label className='fw-bold' htmlFor="item">Item</label>
                <input className='d-block w-75 mb-3' type="text" name='item' placeholder='Enter item' autoFocus value={item} onChange={(e) => setItem(e.target.value)}/>
                <label className='fw-bold' htmlFor="place">Place</label>
                <input className='d-block w-75 mb-3' type="text" name='place' placeholder='Enter place' value={place} onChange={(e) => setPlace(e.target.value)}/>
                <label className='fw-bold' htmlFor="description">Description</label>
                <textarea className='d-block mb-3' name="description" placeholder='Enter description' cols="33" rows="4" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <label className='fw-bold' htmlFor="name">Name</label>
                <input className='d-block w-75 mb-3' type="text" name='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}/>
                <label className='fw-bold' htmlFor="phone">Phone Number</label>
                <input className='d-block w-75 mb-3' type="tel" name='phone' placeholder='Enter phone number' maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <label className='fw-bold' htmlFor="email">Email</label>
                <input className='d-block w-75 mb-3' type="email" name='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                {
                        op==="add" ? <button type="button" className='btn me-3' onClick={addHandler}><Link className='text-dark text-decoration-none' to="/">Add</Link></button>
                        : <button type="button" className='btn me-3' onClick={updateHandler}><Link className='text-dark text-decoration-none' to="/">Update</Link></button>
                }
                <button type="button" className='btn'><Link className='text-dark text-decoration-none' to="/">Cancel</Link></button>
                
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