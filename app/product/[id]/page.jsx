// pages/product/[id].js
import { useRouter } from 'next/router';
import products from '@/data/products.json';

export default function ProductDetail() {
    const router = useRouter();
    const { id } = router.query;
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) return <p>Product not found</p>;

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold my-4">{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button className="btn btn-primary">Add to Cart</button>
        </div>
    );
}
