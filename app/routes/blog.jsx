import React, { useTransition } from 'react'
import { Form, useLoaderData } from '@remix-run/react';


const blog = () => {
   const transition = useTransition();
  return (
    <div className="container mt-5 mx-auto">
      <div className="card  border mx-auto">
        <div className="card-body m-5">
          <h5 className="card-title text-[25px]">Blog page</h5>
          <p className="card-text">This is a simple blog page</p>
          <a href="/" className="btn bg-blue-400 p-3 mt-8 inline-block text-white">
            Go to home
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
    </div>
  )
}

export default blog