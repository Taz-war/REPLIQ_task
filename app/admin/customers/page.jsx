// app/admin/customers/page.jsx
const fakeCustomers = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    // Add more customers as needed
];

export default function Customers() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Customers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fakeCustomers.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
