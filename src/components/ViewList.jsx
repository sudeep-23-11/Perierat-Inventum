import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewList(props) {
    return (
        <div className="container-fluid" style={{minHeight: "100vh"}}>
            <div className="container d-flex flex-row flex-wrap gap-2" style={{marginTop: "5%"}}>
                {props.data.map((e) => {
                    return props.category.includes(e.category) ?
                        <Link key={e.id} className="container text-center w-25 text-dark text-decoration-none" to="/view-item" onClick={() => {props.setEntity(e)}}>
                            <h1>{e.item}</h1>
                            <img className='h-50 w-50' src={e.image} alt="loading" />
                        </Link>
                    : null
                })}
            </div>
        </div>
    )
}