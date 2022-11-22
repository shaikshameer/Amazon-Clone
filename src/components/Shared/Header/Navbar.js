import React from "react";
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="navbarContainer">
                <div className="navbarLeft">
                    <button className="navLeftButton"><span>All</span></button>
                </div>
                <div className="navbarCenter">
                    <button className="todaysDealsButton"><span>Todays Deals</span></button>
                    <button className="customerServiceButton"><span>Customer Service</span></button>
                    <button className="registryButton"><span>Registry</span></button>
                    <button className="giftCardsButton"><span>Gift Cards</span></button>
                    <button className="sellButton"><span>Sell</span></button>
                </div>
                <div className="navbarRight">
                    <button className="greatDealsButton"><span>Shop Great Deals Now</span></button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;