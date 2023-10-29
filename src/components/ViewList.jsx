import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewList() {
    return (
        <div className="container-fluid" style={{minHeight: "100vh"}}>
            <div className="container d-flex flex-row flex-wrap gap-2" style={{marginTop: "5%"}}>
                <Link className="container text-center w-25 text-dark text-decoration-none" to="/view-item">
                    <h1> </h1>
                    <img className='h-50 w-50' src="" alt="loading" />
                </Link>
            </div>
        </div>
    )
}