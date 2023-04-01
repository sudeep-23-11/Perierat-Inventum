import React from 'react'

import '../../style/item-list.css'
import Item from './Item';

export default function ItemList(props) {
    return (
        <div id='item-list'>
            <Item color={props.color}/>
            <Item color={props.color}/>
            <Item color={props.color}/>
            <Item color={props.color}/>
            <Item color={props.color}/>
        </div>
    )
}