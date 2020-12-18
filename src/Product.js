import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
<<<<<<< HEAD
=======
    console.log("This is the basket>>>>>>>>>>",basket);
>>>>>>> b435964569b0a8456552fcda9a54e4b85f2078f3

    const addToBasket = () => {
        // dispath the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i)=>(
                         <p>⭐</p>
                    ))}
                    
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
<<<<<<< HEAD

=======
>>>>>>> b435964569b0a8456552fcda9a54e4b85f2078f3
    )
}

export default Product
