"use client"
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password
    });
    if (!result.error) {
      // Handle success
      console.log("hello from fahim")
    } else {
      // Handle errors
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">Email</label>
              <input type="text" placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md"
                id="email" name="email" required />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">Password</label>
              <input type="password" placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md"
                id="password" name="password" required />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
