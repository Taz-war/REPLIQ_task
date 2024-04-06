// app/admin/customers/add/page.jsx
"use client"
import { useNavigation } from 'next/navigation';

export default function AddCustomer() {
    // const navigation = useNavigation();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would handle form submission to your backend
        alert('Customer added!'); // Placeholder action
        navigation.navigate('/admin/customers'); // Redirect back to customer list
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add Customer</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label" htmlFor="name">
                        Name
                    </label>
                    <input type="text" id="name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label" htmlFor="email">
                        Email
                    </label>
                    <input type="email" id="email" name="email" className="input input-bordered" required />
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                    Add Customer
                </button>
            </form>
        </div>
    );
}
