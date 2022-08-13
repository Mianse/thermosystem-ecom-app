import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='https://thermosystemea.com/wp-content/uploads/2021/05/replenish-4-510x502.jpg' alt=''/>

      </div>
      <div className='home__row'>
           
   
         
            <Product id='5' title='ThermoGun'price={1800} image='https://thermosystemea.com/wp-content/uploads/2021/05/IMG_20210527_143338-e1622450538154.jpg'  />
            <Product id='7' title='silicone Masks' price={700} image='https://thermosystemea.com/wp-content/uploads/2021/05/IMG_20210527_142956-e1622467004615.jpg'/>
            
            {/*products */}
      </div>
      <div className='home__row'>
            <Product id='1' title='Moringa leaf flower' price={290} image='https://thermosystemea.com/wp-content/uploads/2021/05/IMG_20210527_142848-e1622438121785.jpg'/>
            <Product id='2' title='250ml Hand sanitizer' price={350} image='https://thermosystemea.com/wp-content/uploads/2021/05/IMG_20210527_143035-e1622456522964.jpg'/>
            <Product id='3' title='500ml Spray Hand Sanitizer' price={495} image='https://thermosystemea.com/wp-content/uploads/2021/05/IMG_20210527_143035-e1622456522964.jpg'/>
      </div>
      <div className='home__row'>
            {/*products */}
            <Product id='4' title='Latex Gloves' price={790} image='https://thermosystemea.com/wp-content/uploads/2021/05/IMG_20210527_142254.jpg'/>
      </div>
       
    </div>
  )
}

export default Home
