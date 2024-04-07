import fs from 'fs';
import path from 'path';


export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        const data = req.body;
        const filePath = path.resolve('../../data/orders.json'); // The path to your JSON file
        const currentData = JSON.parse(fs.readFileSync(filePath)); // Read existing data

        // Assign a new unique ID based on current timestamp (simple example)
        data.id = new Date().getTime();
        currentData.push(data); // Add the new order

        fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2)); // Write the updated data back to the file

        res.status(200).json({ message: 'Order placed successfully' });
    } else {
        // Handle any other HTTP methods
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
