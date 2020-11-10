import React from "react";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout(){
    const [{basket}]= useStateValue();

    return ( 
        // checkout_left is the left part of the checkout page 
    <div className="checkout">
      
        <div className="checkout__left">
            <img className="checkout__banner" alt="" src="https://knowprepinsite.000webhostapp.com/resources/banner8.jpg"/>
            <div className="checkout__title"><h2> Shopping Basket</h2>
            {basket.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                />
            ))}

            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
            </div>
        </div>
        <div className="checkout__right">
            < Subtotal/>
        </div>
    </div>
    ); 
}

export default Checkout;


