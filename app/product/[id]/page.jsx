// pages/product/[id].js
"use client"
import Link from 'next/link';
import products from '@/data/products.json';

export default function ProductDetail({ params }) {
    // const router = useRouter();
    // const { id } = router.query;
    const product = products.find((p) => p.id === parseInt(params.id));

    if (!product) return <p>Product not found</p>;

    return (
        <div className="container mx-auto px-4 py-8 flex flex-wrap md:flex-nowrap">
      <div className="flex-none w-full md:w-1/2 h-auto bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: `url(${product.image})` }}>
      <figure ><img src={product.image_url} alt={product.name} width={680} height={500} className=' rounded-lg'/></figure>
      </div>
      <div className="flex-1 ml-0 md:ml-8 mt-8 md:mt-0">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4 mt-8"><b>Price:</b>    $  {product.price}</p>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button className="btn btn-error text-white" onClick={() => console.log('Add to Cart')}>Add to Cart</button>
          <Link href="/checkout">
          <button className="btn btn-success text-white" onClick={() => console.log('Add to Cart')}>Buy now</button>
          </Link>
        </div>
      </div>
    </div>
    );
}
