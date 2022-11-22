import React from 'react'
import './CardItem.css'
import NestedCardBody from './NestedCardBody'

function NestedCardItem(props) {
    let arr = props.attr
    return (
        <div className="card">
            <div className='cardHeader'>
                <p>{props.attr.cardHeader}</p>
            </div>
            <div className="cardBody row">
                {props.attr.cardBody.map((items) => (
                    <NestedCardBody attr = {items} />
                ))}
            </div>
            <div className='cardFooter'>
                <p><a href=''>{props.attr.cardFooter}</a></p>
            </div>
        </div>
    )
}

export default NestedCardItem;
