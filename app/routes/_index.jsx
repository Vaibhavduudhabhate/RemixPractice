import Navbar from "../Components/Navbar";
import { Form, useLoaderData } from '@remix-run/react';
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
  console.log(products);
  return json({ products });
  
};

export default function Index() {
  const { products } = useLoaderData();
  return (
    <>
    <div className="container mt-5 mx-auto mb-5">
      <div className="card  border mx-auto">
        <div className="card-body m-5 flex justify-between">
          <div>
            <h5 className="card-title text-[25px]">Hello Remix</h5>
            <p className="card-text">This is a Home page</p>
          </div>
            <a href="/about" className="btn bg-blue-400 p-3 h-[50px] inline-block text-white">
            Learn More
          </a>
        </div>
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
            <a
              href={`/products/${product.id}`}
              className="absolute bottom-0 bg-blue-500 text-white py-2 px-4 rounded text-center"
            >
              View More...
            </a>
          </div>
        ))}
      </div>
    </div>
    </>

  );
}
