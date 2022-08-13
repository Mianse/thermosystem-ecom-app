import React from 'react'
import './checkout.css'
import Subtotal from './Subtotal'

const Checkout = () => {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src='https://m.media-amazon.com/images/G/01/img18/home/registry/SavileRow_Registry_D._CB1198675309_.jpg'/>
            <div>
                <h2 className='checkout__title'>Your shopping basket</h2>
                {/* basket item*/}
            </div>
        </div>
        <div className='checkout__right'>
           <Subtotal/>
        </div>
        
    </div>
  )
}

export default Checkout
