import React from 'react'
import './Header.css'

function Header() {
    function handleonChange(){
        const select = document.querySelector('.category')
        select.addEventListener('change', (event) => {
            let tempSelect = document.createElement('select')
            let tempOption = document.createElement('option')
            tempOption.textContent = event.target.options[event.target.selectedIndex].text;
            tempSelect.style.cssText += `visibility: hidden; position: fixed;`;
            tempSelect.appendChild(tempOption);
            event.target.after(tempSelect)
            const tempSelectWdith = tempSelect.getBoundingClientRect().width + 10;
            event.target.style.width = `${tempSelectWdith}px`
            tempSelect.remove()
        })
        select.dispatchEvent(new Event('change'))
    }
    return (
        <div className='container-outer'>
            <div className='headerLeft'>
                <div className="branding">
                    <button className='brandButton'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-shop shopLogo" viewBox="0 0 16 16">
                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                        </svg>
                        <span className='brandName'>E Shop</span>
                    </button>
                </div>
                <div className='locationDiv'>
                    <button className='locationButton'>
                        <p className='deliverTo'>Deliver to</p>
                        <div className='locationName'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill mx-1" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                            <span className='country'>India</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className='headerCenter'>
                <div className='headerSearch'>
                    <div className='headerSearchLeft'>
                        <form>
                            <select className='category' onChange={handleonChange}>
                                <option>All</option>
                                <option>Arts & Crafts</option>
                                <option>Automotive</option>
                                <option>Baby</option>
                                <option>Beauty & Personal Care</option>
                                <option>Books</option>
                                <option>Boys Fashion</option>
                                <option>Computers</option>
                                <option>Deals</option>
                                <option>Digital Music</option>
                                <option>Electronics</option>
                                <option>Girls Fashion</option>
                                <option>Health & Household</option>
                                <option>Home & Kitchen</option>
                                <option>Industrial & Scientific</option>
                                <option>Kindle Store</option>
                                <option>Luggage</option>
                                <option>Mens Fashion</option>
                                <option>Movies & TV</option>
                                <option>Luggage</option>
                                <option>Music, CDs & Vinyl</option>
                                <option>Pet Supplies</option>
                                <option>Prime Video</option>
                                <option>Software</option>
                                <option>Sports & Outdoors</option>
                                <option>Tools & Home Improvement</option>
                                <option>Toys & Games</option>
                                <option>Video Games</option>
                                <option>Womens Fashion</option>

                            </select>
                        </form>
                    </div>
                    <div className='headerSearchCenter'>
                        <input className="searchInput" type="text"></input>
                    </div>
                    <div className='headerSearchRight'>
                        <button type='submit'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" className="bi bi-search submitsvg" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='headerRight'>
                <div className="dropdown languageDiv">
                    <button className="btn dropdown-toggle languageButton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className='lang'>EN</span>
                    </button>
                    <ul className="dropdown-menu languageul">
                        <li><a className="dropdown-item langItem" href="#">English - EN</a></li>
                        <li><a className="dropdown-item langItem" href="#">Espanol - ES</a></li>
                        <li><a className="dropdown-item langItem" href="#">Deutsch - DE</a></li>
                        <li><a className="dropdown-item langItem" href="#">Hindi - HI</a></li>
                        <li><a className="dropdown-item langItem" href="#">Telugu - TE</a></li>
                    </ul>
                </div>
                <div className='signIn'>
                    <p className='signInText'>Hello, sign in</p>
                    <div className="dropdown">
                    <button className="btn dropdown-toggle signInButton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className='signInDropDown'>Account & Lists  </span>
                    </button>
                    <ul className="dropdown-menu accountul">
                        <p className='langItemHeading'>Your Account</p>
                        <li><a className="dropdown-item accountItem" href="#">Accounts</a></li>
                        <li><a className="dropdown-item accountItem" href="#">Orders</a></li>
                        <li><a className="dropdown-item accountItem" href="#">Recommendations</a></li>
                        <li><a className="dropdown-item accountItem" href="#">Browsing History</a></li>
                        <li><a className="dropdown-item accountItem" href="#">Watchlist</a></li>
                        <li><a className="dropdown-item accountItem" href="#">Video Purchases & Rentals</a></li>
                        <li><a className="dropdown-item accountItem" href="#">Kindle Unlimited</a></li>
                        <li><a className="dropdown-item accountItem" href="#">Content & Devices</a></li>
                        <li><a className="dropdown-item accountItem" href="#">Subscribe & Save Items</a></li>
                        <li><a className="dropdown-item accountItem" href="#">Memberships & Subscriptions</a></li>
                        <li><a className="dropdown-item accountItem" href="#">Music Library</a></li>
                    </ul>
                </div>
                </div>
                <div className='orderDetails'>
                    <button>
                        <p>Returns</p>
                        <p>& Orders</p>
                    </button>
                </div>
                <div className='cart'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        <span className='carttext'>Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
