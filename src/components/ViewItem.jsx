import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewItem() {

    let deleteHandler = () => {

    }

    return (
        <div className="container-fluid d-flex flex-row align-items-center" style={{minHeight: "100vh"}}>
            <div className="container w-25">
                <h3>Item</h3>
                <h5 className='mb-3'> </h5>
                <h3>Place</h3>
                <h5 className='mb-3'> </h5>
                <h3>Description</h3>
                <h5 className='mb-3'> </h5>
                <h3>Name</h3>
                <h5 className='mb-3'> </h5>
                <h3>Phone Number</h3>
                <h5 className='mb-3'> </h5>
                <h3>Email</h3>
                <h5 className='mb-3'> </h5>
                <button type="button" className='btn'><Link className='text-dark text-decoration-none' to="/">Update</Link></button>
                <button type="button" className='btn' onClick={deleteHandler}><Link className='text-dark text-decoration-none' to="/">Delete</Link></button>
                <button type="button" className='btn'><Link className='text-dark text-decoration-none' to="/">Cancel</Link></button>
            </div>
            <div className="container w-25">
                <img className='h-100 w-100' src="" alt="loading" />
            </div>
        </div>
    )
}