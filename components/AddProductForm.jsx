import { useState } from 'react';

export default function AddProductForm({ onAdd }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate adding a product
    onAdd({ id: Date.now(), name, price: parseFloat(price) });
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <label className="label">
        <span className="label-text">Product Name</span>
      </label>
      <input type="text" placeholder="Name" className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} required />
      
      <label className="label">
        <span className="label-text">Price</span>
      </label>
      <input type="number" placeholder="Price" className="input input-bordered" value={price} onChange={(e) => setPrice(e.target.value)} required />
      
      <button type="submit" className="btn btn-primary mt-4">Add Product</button>
    </form>
  );
}
