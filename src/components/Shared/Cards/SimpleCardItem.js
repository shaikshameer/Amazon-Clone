import React from 'react'
import './SimpleCardItem.css'

function SimpleCardItem(props) {
    return (
        <div className="card">
            <div className='cardHeader'>
                <p>{props.attr.title}</p>
            </div>
            <div className="simpleCardBody row">
                <img src = {props.attr.image}
                ></img> 
            </div>
            <div className='cardFooter'>
                <p><a href=''>{props.attr.desc}</a></p>
            </div>
        </div>
    )
}

export default SimpleCardItem;
