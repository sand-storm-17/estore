// import { Checkbox } from '@material-ui/core';
import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price}) {
  const [dispatch] = useStateValue();

  const removeFromBasket = () => {
  // remove the item from basket    
      dispatch({
        type : 'REMOVE_FROM_BASKET',
        id: id
        
      })
  }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' alt="" src={image}/>

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}
        </p>
        <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>Remove from Basket</button>

      </div>
      
    </div>
  )
}

export default CheckoutProduct