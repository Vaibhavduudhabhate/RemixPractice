import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const loader = async ({ params }) => {
  const { productId } = params;
  console.log(productId)
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  
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
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-contain mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-sm text-black-500 mb-4">{product.category}</p>
        <p className="text-lg text-gray-600 mb-4">${product.price}</p>
        <p className="text-sm text-gray-500 mb-4">{product.description}</p>

        <a href="/" className="btn bg-blue-500 text-white p-3 rounded-lg">Back to Home</a>
      </div>
    </div>
  );
}
