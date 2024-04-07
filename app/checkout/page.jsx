"use client"
import { useState } from 'react';

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process checkout data here. For example, send data to your backend.
    console.log(formData);
    alert('Checkout submitted. Implement functionality here.');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full max-w-xs" value={formData.name} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs my-4" value={formData.address} onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" className="input input-bordered w-full max-w-xs" value={formData.city} onChange={handleChange} required />
        <input type="text" name="country" placeholder="Country" className="input input-bordered w-full max-w-xs my-4" value={formData.country} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary">Submit Order</button>
      </form>
    </div>
  );
}
