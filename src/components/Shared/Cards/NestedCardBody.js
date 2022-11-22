import React from 'react'
import './NestedCardBody.css'

function NestedCardBody(props) {
    return (
        <div className='cardInnerItem col-6'>
            <img src= {props.attr.image}
            ></img>
            <p>{props.attr.desc}</p>
        </div>
    )
}

export default NestedCardBody;
