import React from 'react'

function CarousalItem(props) {
    console.log(props.item)
    return (
        <div className="carousel-item">
            <img 
                src= {props.item.image} 
                className="d-block w-100" 
                alt= {props.item.desc}
            ></img>
        </div>
    )
}

export default CarousalItem;
