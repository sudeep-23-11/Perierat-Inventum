import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function ViewItem(props) {

    let deleteHandler = () => {
        axios.delete(`https://653f56889e8bd3be29e0557d.mockapi.io/perierat-inventum/${props.entity.id}`)
        .then((response) => {
            props.setFlag(!props.flag);
        })
        .catch((error) => {
            console.log("Error in deleting data\n", error)
        })
    }

    return (
        <div className="container-fluid d-flex flex-row align-items-center" style={{minHeight: "100vh"}}>
            <div className="container w-25">
                <h3>Item</h3>
                <h5 className='mb-3'>{props.entity.item}</h5>
                <h3>Place</h3>
                <h5 className='mb-3'>{props.entity.place}</h5>
                <h3>Description</h3>
                <h5 className='mb-3'>{props.entity.description}</h5>
                <h3>Name</h3>
                <h5 className='mb-3'>{props.entity.name}</h5>
                <h3>Phone Number</h3>
                <h5 className='mb-3'>{props.entity.phone}</h5>
                <h3>Email</h3>
                <h5 className='mb-3'>{props.entity.email}</h5>
                <button type="button" className='btn'><Link className='text-dark text-decoration-none' to="/update-item">Update</Link></button>
                <button type="button" className='btn' onClick={deleteHandler}><Link className='text-dark text-decoration-none' to="/">Delete</Link></button>
                <button type="button" className='btn'><Link className='text-dark text-decoration-none' to="/">Cancel</Link></button>
            </div>
            <div className="container w-25">
                <img className='h-100 w-100' src={props.entity.image} alt="loading" />
            </div>
        </div>
    )
}