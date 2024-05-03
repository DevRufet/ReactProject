import React from 'react'
import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { MainContext } from '../../context/MainProvider'
import './basket.scss'
function BasketPages() {
  const {basket}=useContext(MainContext)
  console.log(basket);
  return (
      <>
      <Helmet>
        <title>Basket</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {
      basket.map((x)=>(
        <div className='homeitem' key={x.id}>
          <img src={x.image} alt="" />
         <p>{x.title}</p>
          <span>{x.price}</span>
        </div>
      ))
       }
      </>
    
  )
}

export default BasketPages