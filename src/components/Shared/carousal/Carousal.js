import React from "react";
import CarousalItem from "./CarousalItem";
import './Carousal.css'

function Carousal(props) {
    let arr = props.attr
    console.log(arr)
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img 
                    src="https://m.media-amazon.com/images/I/71aQ3u78A3L._SX3000_.jpg"
                    className="d-block w-100" 
                    alt= '...'
                ></img>
                </div>
               {arr.map((items) => (
                    <CarousalItem item = {items}/>
               ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousal
