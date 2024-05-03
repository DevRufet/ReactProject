import React from 'react'
import { Helmet } from 'react-helmet-async'
import './updateproducts.scss'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
function UpdateProduct() {
  const [product, setproduct] = useState(null)
  let { id } = useParams();
  useEffect(() => {
   datas()
  }, [])
  
  
  async function getDetails(id) {
    const response = await fetch("http://localhost:3000/products/"+id);
    const data = await response.json();
    return data;
  }
  async function datas() {
    let datalar = await getDetails(id);
    setproduct(datalar);
  }
 
  return (<>
  <Helmet>
        <title>UpdateProduct</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="formadd">
        <h1>Update Product</h1>
      {product ? <Formik
        initialValues={{ image: product.image, title:product.title, price: product.price }}
        validationSchema={Yup.object({
          image: Yup.string()
            .required("Required"),
          title: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          price: Yup.number()
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            fetch("http://localhost:3000/products/"+id, {
              method: "put",
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(values),
            });
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="forms"> 
          <label htmlFor="image">Image Src:</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />
<br />
          <label htmlFor="title">Title:</label>
          <Field  name="title" type="text" />
          <ErrorMessage name="title" />
<br />
          <label htmlFor="price">Price:</label>
          <Field    name="price" type="price" />
          <ErrorMessage name="price" />
<br />
          <button type="submit">Submit</button>
        </Form>
      </Formik> : null} 
      </div>
  </>
    
  )
}

export default UpdateProduct