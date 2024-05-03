import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Routes, Route, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './detail.scss'
function Detail() {
  let { id } = useParams();
  const [datas, setdatas] = useState({})
  useEffect(() => {
    datalars()
  }, [])
  async function datalar(id) {
    const response = await fetch("http://localhost:3000/products/"+id);
    const data = await response.json();
    return data
  }
  async function datalars(){
    let datalars=await datalar(id)
    setdatas(datalars)
  }

console.log(datas);

  
  return (
      <>
      <Helmet>
      <title>Hello World</title>
      <link rel="canonical" href="https://www.tacobell.com/" />
    </Helmet>
    <div className='home'> 
        <div className='homeitem' >
          <img src={datas.image} alt="" />
          <p>{datas.title}</p>
          <span>{datas.price}</span>
        </div>
      </div>
      </>
   
  )
}

export default Detail