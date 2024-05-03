import React from 'react'
import { Link } from 'react-router-dom'
import './adminnavbar.scss'
function AdminNavbar() {
  return (
    <>
    <div className='adminnavbar'>
        <div>
    <Link to={'/admin'}>Admin</Link>
    <Link to={'/admin/add'}>AddProduct</Link>
    <Link to={'/admin/update'}>UpdateProduct</Link>
    </div>
    </div>
    </>
  )
}

export default AdminNavbar