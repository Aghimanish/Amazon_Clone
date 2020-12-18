import React from 'react'
import "./Checkout.css";
<<<<<<< HEAD
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
=======
import Subtotal from "./Subtotal";

function Checkout() {
>>>>>>> b435964569b0a8456552fcda9a54e4b85f2078f3
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="No Ad."/>
                <div>
                    <h2 className="checkout_title">
<<<<<<< HEAD
                        Your Shopping Basket 
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id} title={item.title} image={item.image} price={item.price} rating = {item.rating}
                        />
                    ))}
=======
                        Your Shopping Basket
                        {/* BasketItem */}
                        {/* BasketItem */} 
                    </h2>
>>>>>>> b435964569b0a8456552fcda9a54e4b85f2078f3
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
