import React from 'react'

import '../style/home.css'
import ItemList from './Item/ItemList'

export default function Home(props) {
    return (
        <div id='home'>
            <ItemList color={props.color[0]} list={props.list[0]}/>
            <ItemList color={props.color[1]} list={props.list[1]}/>
        </div>
    )
}