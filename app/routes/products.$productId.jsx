import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const loader = async ({ params }) => {
  const { productId } = params;
  console.log(productId)
  const res = await fetch(`https://fakestoreapi.in/api/products/${productId}`);
  
  if (!res.ok) {
    throw new Response("Product not found", { status: 404 });
  }

  const product = await res.json();
  console.log(product)
  return json({ product });
};

// export const meta = ({ data }) => {
//   return data
//     ? { title: `${data.product.title} | Product`, description: data.product.description }
//     : { title: "Product Not Found" };
// };

export default function ProductPage() {
  const { product } = useLoaderData();

  return (
    <div className="container mx-auto mt-5 mb-5">
      <div className="border rounded-lg shadow-lg p-6 flex flex-col items-center">
        <img
          src={product.product.image}
          alt={product.product.title}
          className="w-64 h-64 object-contain mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{product.product.title}</h1>
        <p className="text-sm text-black-500 mb-4">{product.product.category},{product.product.model}</p>
        <p className="text-lg text-gray-600 mb-4">${product.product.price}</p>
        <p className="text-sm text-gray-500 mb-4">{product.product.description}</p>
        <p className="text-sm text-gray-500 mb-4">{product.product.brand}</p>
        <p className="text-sm text-gray-500 mb-4">{product.product.color}</p>


        <a href="/" className="btn bg-blue-500 text-white p-3 rounded-lg">Back to Home</a>
      </div>
    </div>
  );
}
