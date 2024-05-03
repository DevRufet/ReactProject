import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { useState } from 'react'
import './home.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { MainContext } from '../../context/MainProvider'
function Home() {
  const [datas, setdatas] = useState([])
  const [myinp, setmyinp] = useState('')
  useEffect(() => {
    datalars()
  }, [])
  async function datalar() {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    return data
  }
  async function datalars(){
    let datalars=await datalar()
    setdatas(datalars)
  }
  function az(params){
    setdatas(datas.toSorted((a,b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0)))
 }
 function za(params){
    setdatas(datas.toSorted((a,b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0)))
 }
 const {basket,add}= useContext(MainContext)

  return ( 
      <>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <button onClick={()=>az("price")}>A-z</button>
    <br />
    <button onClick={()=>za("price")}>Z-a</button>
    <br />
    <input type="text" value={myinp} onChange={(e)=>setmyinp(e.target.value)} />

      <div className='home'>
       {
      datas.filter((x)=>x.title.toLowerCase().includes(myinp.toLowerCase()))

      .map((x)=>(
        <div className='homeitem' key={x.id}>
          <img src={x.image} alt="" />
         <Link to={`/detail/${x.id}`}><p>{x.title}</p></Link>
          <span>{x.price}</span>
          <button onClick={()=>add(x)}>Add Basket</button>
        </div>
      ))
       }
      </div>
      </>
    
  )
}

export default Home