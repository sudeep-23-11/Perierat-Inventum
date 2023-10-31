import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewList(props) {

    const mq = window.matchMedia('(min-width: 992px)').matches;

    return (
        <div className="container-fluid" style={{minHeight: "100vh", backgroundColor: "#F1EFEF"}}>
            <div className="container d-flex flex-column flex-lg-row flex-lg-wrap gap-2">
                {props.data.map((e) => {

                    const bgc = e.category==="lost" ? "#FCAEAE" : "#D0E7D2";
                    const tc = e.category==="lost" ? "#FE0000" : "#618264";

                    return props.category.includes(e.category) && Object.values(e).join(' ').toLowerCase().includes(props.search.toLowerCase()) ?
                        <Link key={e.id} className="container d-flex flex-column justify-content-center align-items-center text-decoration-none border border-black rounded" to="/view-item" style={{width: mq ? "25%" : "50%", marginTop: "10%", backgroundColor: bgc, color: tc}} onClick={() => props.setEntity(e)}>
                            <img className='h-50 w-50 mb-3' src={e.image} alt="loading" />
                            <h1>{e.item}</h1>
                        </Link>
                    : null
                })}
            </div>
        </div>
    )
}