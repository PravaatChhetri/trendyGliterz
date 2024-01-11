"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";

const ProductValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be a positive number"),
  description: Yup.string().required("Description is required"),
  quantity: Yup.number()
    .required("Quantity is required")
    .positive("Quantity must be a positive number")
    .integer("Quantity must be an integer"),
  category: Yup.string().required("Category is required"),
  // image will be handled separately
});

const ProductForm = ({ data , type}) => {
  const [image, setImage] = React.useState(data?data.image:"");
  const typeOfForm=type;

  const handleFormUpdate = async (formData) => {
  
    try {
        const res=await fetch(`http://localhost:3000/api/products/${data._id}`, {
            method: "PUT",
            body:  formData,
        });
        if(res.status===200){
            alert("Product updated successfully");
        }
        else{
            alert("Error occured");
        }
    } catch (error) {
        console.log(error);
    }
    };

  
  const  handleFormSubmit = async (values) => {
    const formData = new FormData();

  // Append all form values to formData
  for (const key in values) {
    if (values.hasOwnProperty(key)) {
      formData.append(key, values[key]);
    }
  }

    if(type=== "Add Product"){try {
        const res=await fetch("http://localhost:3000/api/products", {
            method: "POST",
            body:  formData,
        });
        if(res.status===200){
            alert("Product added successfully");
        }
        else{
            alert("Error occured");
        }
    } catch (error) {
        console.log(error);
    }}
    else if(type==="Update Product"){
        handleFormUpdate(formData);
    }

    console.log(values);
    // Here you will handle the form submission, including the image upload
  };

  return (
    <div className="p-5 bg-neutral border-[1px] rounded-lg border-[#fff] shadow-lg mx-auto">
      <h1 className="text-2xl text-white font-bold text-center mb-3">
        {/* {typeOfForm==="add"?"Add Product":"Update Product"} */}
        {typeOfForm}
      </h1>
      <Formik
        initialValues={{
          name: data ? data.name : "",
          price: data ? data.price : "",
          description: data ? data.description : "",
          quantity: data ? data.quantity : "",
          category: data ? data.category : "",
          image: data ? data.image : null, // Initial value for image
        }}
        validationSchema={ProductValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-5 flex flex-col">
            <label className="flex justify-center items-start mt-5 w-[300px]">
              <input
                type="file"
                name="image"
                onChange={(event) => {
                  setImage(URL.createObjectURL(event.currentTarget.files[0]));
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
                hidden
              />
              {image === "" ? (
                <div className=" w-full h-[150px] border-2 border-[#fff] border-dashed flex justify-center items-center rounded-lg">
                  <p className="text-md font-semibold text-center text-white">
                    Drag and Drop Image
                  </p>
                </div>
              ) : (
                <Image
                  src={image}
                  alt="image"
                  width={500}
                  height={500}
                  className="w-full border-[1px] border-[#fff] object-cover rounded-md"
                />
              )}
            </label>
            <ErrorMessage
              className="text-[#af4343]"
              name="image"
              component="div"
            />
            <div className="flex flex-col gap-5 mr-5">
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="focus:ring-2 p-2 border-[1px] border-[#545353] w-[300px] h-[40px] rounded-md"
                {...(typeOfForm==="Product Details"?{disabled:true}:{})}
                
              />
              <ErrorMessage
                className="text-[#af4343] -mt-2"
                name="name"
                component="div"
              />
              <Field
                type="number"
                name="price"
                placeholder="Price"
                className="focus:ring-2 p-2 border-[1px] border-[#545353] w-[300px] h-[40px] rounded-md"
                {...(typeOfForm==="Product Details"?{disabled:true}:{})}

              />
              <ErrorMessage
                className="text-[#af4343]"
                name="price"
                component="div"
              />

              <Field
                type="textarea"
                name="description"
                placeholder="Description"
                className="focus:ring-2 p-2 border-[1px] border-[#545353] w-[300px] h-[40px] rounded-md"
                {...(typeOfForm==="Product Details"?{disabled:true}:{})}

              />
              <ErrorMessage
                className="text-[#af4343]"
                name="description"
                component="div"
              />

              <Field
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="focus:ring-2 p-2 border-[1px] border-[#545353] w-[300px] h-[40px] rounded-md"
                {...(typeOfForm==="Product Details"?{disabled:true}:{})}

              />
              <ErrorMessage
                className="text-[#af4343]"
                name="quantity"
                component="div"
              />

              <Field
                type="text"
                name="category"
                placeholder="Category"
                className="focus:ring-2 p-2 border-[1px] border-[#545353] w-[300px] h-[40px] rounded-md"
                {...(typeOfForm==="Product Details"?{disabled:true}:{})}

              />
              <ErrorMessage
                className="text-[#af4343]"
                name="category"
                component="div"
              />
              <button
                type="submit"
                className={`btn btn-white hover:bg-transparent hover:text-white text-lg w-[150px] ${typeOfForm==="Product Details"?"hidden":""}`}
              >
                {typeOfForm==="Add Product"?"Submit":"Update"}

              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
