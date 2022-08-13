import React from 'react'
import './Product.css'
import { useStateValue } from './Stateprovider';

const Product = ({id,title, image, price, rating}) => {
  const [state, dispatch] = useStateValue();
  const AddToBasket=()=>{
    //despatch the item into the data layer
    dispatch({
      type:'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }
  return (
    <div className='product'>
        <div className='product__info'>
            <p> {title} </p>
            <p className='product__price'><small>Ksh.</small><strong>{price}</strong></p>
            <div className='product__rating'><p></p></div>
            <img 
            src ={image} alt=''/>
            <button onClick={AddToBasket} >Add to Basket</button>
        </div>
    </div>
  )
}

export default Product
