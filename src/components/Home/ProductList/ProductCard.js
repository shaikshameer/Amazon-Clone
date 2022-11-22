import './ProductCard.css'

function ProductCard(props) {
    return (
        <div className="card  p-2 mt-2">
            <div className='imageDiv'>
                <img src = {props.item.image}
                    className="card-img-top"
                    alt="product-image"> 
                </img>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.item.title}</h5>
                <p className="price"><b>&#8377; {props.item.price}</b></p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    );
}

export default ProductCard;