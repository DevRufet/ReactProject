import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './admin.scss'
function Admin() {
  const [datas, setdatas] = useState([])
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
  async function DeleteId(id) {
    const response = await fetch("http://localhost:3000/products/" + id, {
      method: "DELETE"
    });
    const data = await response.json();
    datalars()
  }
  
  return (
      <>
      <Helmet>
      <title>Admin</title>
      <link rel="canonical" href="https://www.tacobell.com/" />
    </Helmet>
      
      <table style={{border:"1px solid black"}}>
       <tr style={{border:"1px solid black"}}><td style={{border:"1px solid black"}}>Image</td><td style={{border:"1px solid black"}}>Title</td><td style={{border:"1px solid black"}}>Price</td><td style={{border:"1px solid black"}}>Edit</td><td style={{border:"1px solid black"}}>Delete</td></tr>
       {
      datas.map((x)=>(
        <tr style={{border:"1px solid black"}}><td style={{border:"1px solid black"}}><img src={x.image} alt="" /></td><td style={{border:"1px solid black"}}>{x.title}</td><td style={{border:"1px solid black"}}>{x.price}</td><td style={{border:"1px solid black"}}><button><Link to={`/admin/update/${x.id}`}>Edit</Link></button></td><td style={{border:"1px solid black"}}><button onClick={()=>{DeleteId(x.id)}}>Delete</button></td></tr>
      ))
       }


      </table>
      </>
    
  )
}

export default Admin