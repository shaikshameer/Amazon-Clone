import React, {useState, useEffect} from "react";


function CartItem() {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch()
            .then((res) => {
                return res.json()
            }).then((res) => {
                setItems(res)
            })
    })
    return (
        <div>
            
        </div>
    )
}

export default CartCartItem;
