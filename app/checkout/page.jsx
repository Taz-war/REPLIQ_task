"use client"
import { useState } from 'react';
import cartItems from '@/data/cartItems.json'


export default function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    paymentMethod: 'creditCard', // Default payment method
  });

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the submit action here...
    console.log("hello")
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        // Redirect to the home page after successful submission
        // router.push('/ProductsListView');

      } else {
        // Handle errors based on your preference
        console.error('Failed to submit order');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form', error);
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen  px-6 mt-10">
      <div className=" bg-slate-700 p-8 rounded-lg shadow-md w-full max-w-lg mr-6">
        <h1 className="text-2xl font-bold text-center mb-8">Checkout</h1>
        <form onSubmit={()=>handleSubmit()} className="space-y-4">
          {/* Add all your form fields here */}
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required className="input input-bordered w-full" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="input input-bordered w-full" />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} required className="input input-bordered w-full" />
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="city" placeholder="City" onChange={handleChange} required className="input input-bordered" />
            <input type="text" name="state" placeholder="State" onChange={handleChange} required className="input input-bordered" />
          </div>
          <input type="text" name="zip" placeholder="Zip Code" onChange={handleChange} required className="input input-bordered w-full" />
          <input type="text" name="country" placeholder="Country" onChange={handleChange} required className="input input-bordered w-full" />
          <select name="paymentMethod" onChange={handleChange} className="select select-bordered w-full">
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="crypto">Cryptocurrency</option>
          </select>
          <button type="submit" className="btn btn-primary w-full">Place Order</button>
        </form>
      </div>

      <div className="w-full max-w-sm">
        <div className=" bg-slate-700 p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="mb-4 flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 py-4 border-t-2 border-gray-200">
            <div className="flex justify-between font-bold">
              <span>Total Cost</span>
              <span>${totalCost.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4">Payment Method</h3>
            <p>{formData.paymentMethod === 'creditCard' ? "Credit Card" : formData.paymentMethod === 'paypal' ? "PayPal" : "Cryptocurrency"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
