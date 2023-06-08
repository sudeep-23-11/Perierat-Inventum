import React from 'react'

import ItemList from './Item/ItemList'

export default function Home(props) {
    return (
        <div id='home' style={{fontFamily: 'Poppins',}}>
            <ItemList color={props.color[0]} list={props.list[0]} setEntity={props.setEntity}/>
            <ItemList color={props.color[1]} list={props.list[1]} setEntity={props.setEntity}/>
        </div>
    )
}