import {useState, useEffect} from 'react';
import './Home.css'
import Header from "../../components/Shared/Header/Header";
import Navbar from '../../components/Shared/Header/Navbar';
import Carousal from '../../components/Shared/carousal/Carousal';
import Alerts from '../../components/Shared/Alerts/Alerts';
import NestedCardItem from '../../components/Shared/Cards/NestedCardItem';
import SimpleCardItem from '../../components/Shared/Cards/SimpleCardItem';
import Footer from '../../components/Shared/Footer/Footer';


function Home() {
    //const [products, setProducts] = useState([])
    const [carousalitems, setcarousalItems] = useState([])
    const [carditems, setCardItems] = useState([])
    useEffect(() => {
        // fetch('products.json')
        //     .then((res) => {
        //         return res.json()
        //     }).then((res) => {
        //         setProducts(res)
        //     });
        fetch('carousal-items.json')
        .then((res) => {
            return res.json()
        }).then((res) => {
            setcarousalItems(res)
        })
        fetch('cardbodylist.json')
            .then((res) => {
                return res.json()
            }).then((res) => {
                setCardItems(res)
            })
    },[])
    return (
        <>
            <Header />
            <Navbar />
            <Carousal attr = {carousalitems} />   
            <Alerts info = "You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. Click here to go to amazon.in"/>              
            {
                <div className='row cardItemRow'>
                    {carditems.map((items) => (
                        Array.isArray(items.cardBody) ?
                        <div className='cardWrapper col-xl-3 col-lg-4 col-md-6 col-12'>
                            <NestedCardItem attr = {items}/>
                        </div>
                        :
                        <div className='cardWrapper col-xl-3 col-lg-4 col-md-6 col-12'>
                        <SimpleCardItem attr = {items}/>
                        </div>
                        )
                    )}
                </div>
            }
            <Footer />
            {/* <div className="row">
                {products.map((products) => (
                    <div className="col-3">
                        <ProductCard  item = {products}/>
                    </div>
                ))}
            </div> */}
        </>
    );
}

export default Home;