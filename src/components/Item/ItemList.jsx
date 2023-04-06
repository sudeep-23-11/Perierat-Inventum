import React from 'react'

import '../../style/item-list.css'
import Item from './Item'

export default function ItemList(props) {
    return (
        <div id='item-list'>
            {props.list.map((entity) => {
                return <Item key={entity.id} color={props.color} entity={entity} setEntity={props.setEntity}/>
            })}
        </div>
    )
}