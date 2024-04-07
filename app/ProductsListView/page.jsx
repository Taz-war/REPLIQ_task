"use client";
import {  useCart } from '@/contexts/CartContext';
import products from '@/data/products.json'; 

export default function Products() {
    const { addToCart } = useCart();

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold my-4">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={product.image_url} alt={product.name} width={380} height={250}/></figure>
                    <div className="card-body">
                      <h2 className="card-title">{product.name}</h2>
                      <p>{product.description.length > 200 ? product.description.slice(0, 200) + "..." : product.description}</p>
                      <p>${product.price}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    );
}
