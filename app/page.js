import Image from "next/image";
import SignIn from "./auth/signin";
import Head from 'next/head';
import Link from 'next/link';
import Cart from "./cart/page";
import Products from "./ProductsListView/page";
// import ProductDetail from "./product/[id]/page";
import Dashboard from "./admin/dashboard/page";
import Customers from "./admin/customers/page";
import AddCustomer from "./admin/customers/add/page";
import { CartProvider } from "@/contexts/CartContext";

export default function Home({ Component, pageProps }) {
  return (
    // <CartProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <SignIn /> */}
        <div className="container mx-auto px-4">
        <Head>
          <title>Your Site Name</title>
          <meta name="description" content="Your site description" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="py-5">
          <h1 className="text-3xl font-bold">Welcome to Our Store!</h1>
        </header>
        <main>
          <div className="btn btn-primary">Shop Now</div>
          <Link href="/products" className="btn btn-outline">
            View Products
          </Link>
        </main>
      </div>
        <Cart  />
        <Products />
        {/* <ProductDetail /> */}
        <Dashboard />
        <Customers />
        <AddCustomer />
      </main>
    // </CartProvider>
  );
}
