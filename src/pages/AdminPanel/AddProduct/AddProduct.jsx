import React from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import './addproduct.scss'
function AddProduct() {
  return (
    <>
      <Helmet>
        <title>AddProduct</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="formadd">
        <h1>Add Product</h1>
      <Formik
        initialValues={{ image: "", title: "", price: "" }}
        validationSchema={Yup.object({
          image: Yup.string()
            .required("Required"),
          title: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          price: Yup.string()
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            fetch("http://localhost:3000/products", {
              method: "post",
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
          <Field name="title" type="text" />
          <ErrorMessage name="title" />
<br />
          <label htmlFor="price">Price:</label>
          <Field name="price" type="price" />
          <ErrorMessage name="price" />
<br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      </div>
    </>
  );
}

export default AddProduct;
