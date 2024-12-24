import { Form, Link, useLoaderData } from '@remix-run/react';
import React, { useTransition } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { json } from "@remix-run/node";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const loader = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  // console.log(products); 
  return json({ products });
  
};

const about = () => {
  const { products } = useLoaderData();
    // const { success, data } = useLoaderData();
  const transition = useTransition();
  
  return (
    <div className="container mt-5 mx-auto mb-5">
      <div className="card  border mx-auto">
        <div className="card-body m-5">
          <h5 className="card-title text-[25px]">About us</h5>
          <p className="card-text">This is about us page.</p>
          <a href="/" className="btn bg-blue-400 p-3 mt-8 inline-block text-white">
            Go to home <FaArrowRight className='inline' />
          </a>
        </div>
        <Form className='flex flex-col w-[50%]' method="post" action="">
            <input className='border h-9 p-5 m-5' type="text" name="name" placeholder="Item name" required />
            <input className='border h-9 p-5 mx-5' type="number" name="price" placeholder="Price" required />
            <button className='btn bg-blue-400 p-3 mx-5 mb-5 mt-8 inline-block text-white' type="submit" disabled={transition.state === "submitting"}>
              {transition.state === "submitting" ? "Adding..." : "Add Item"}
            </button>
        </Form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border relative rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="text-lg font-bold text-center mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600 text-center mb-2">${product.price}</p>
            <p className="text-sm text-gray-500 line-clamp-3 text-center">
              {product.description}
            </p>
            <Link
              to={`/products/${product.id}`}
              className="absolute bottom-0 bg-blue-500 text-white py-2 px-4 rounded text-center"
            >
              View More...
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default about