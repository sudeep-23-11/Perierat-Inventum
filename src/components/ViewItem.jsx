import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function ViewItem(props) {

    const key = process.env.REACT_APP_API_KEY;
    const bgc = props.entity.category==="lost" ? "#FCAEAE" : "#D0E7D2";
    const tc = props.entity.category==="lost" ? "#FE0000" : "#618264";

    let deleteHandler = () => {
        axios.delete(`https://${key}.mockapi.io/perierat-inventum/${props.entity.id}`)
        .then((response) => {
            props.setFlag(!props.flag);
        })
        .catch((error) => {
            console.log("Error in deleting data\n", error)
        })
    }

    return (
        <div className="container-fluid d-flex flex-column flex-lg-row align-items-lg-center" style={{minHeight: "100vh", backgroundColor: bgc, color: tc}}>
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
                <div className="container d-flex flex-row flex-wrap gap-2">
                    <button type="button" className='btn' style={{backgroundColor: tc}}><Link className='text-light text-decoration-none' to="/update-item">Update</Link></button>
                    <button type="button" className='btn' style={{backgroundColor: tc}} onClick={deleteHandler}><Link className='text-light text-decoration-none' to="/">Delete</Link></button>
                    <button type="button" className='btn' style={{backgroundColor: tc}}><Link className='text-light text-decoration-none' to="/">Cancel</Link></button>
                </div>
            </div>
            <div className="container w-25 mt-3">
                <img className='h-100 w-100' src={props.entity.image} alt="loading" />
            </div>
        </div>
    )
}