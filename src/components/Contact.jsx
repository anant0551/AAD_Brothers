import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "boAt Bassheads 100 In Ear Wired Earphones",
    price: 297,
    mrp: 999,
    discount: "70% off",
    rating: 4.5,
    reviews: "415,395",
    image: "/boat-bassheads.png",
  },
  {
    id: 2,
    name: "boAt Rockerz 255 Pro+ Bluetooth Earphones",
    price: 999,
    mrp: 3990,
    discount: "75% off",
    rating: 4.2,
    reviews: "210,376",
    image: "/boat-rockerz.png",
  },
  {
    id: 3,
    name: "boAt Airdopes 91 Prime TWS Earbuds",
    price: 699,
    mrp: 3999,
    discount: "82% off",
    rating: 4.0,
    reviews: "4,829",
    image: "/boat-airdopes-91.png",
  },
  {
    id: 4,
    name: "boAt Airdopes 311 Pro TWS Earbuds",
    price: 799,
    mrp: 4499,
    discount: "81% off",
    rating: 4.1,
    reviews: "2,937",
    image: "/boat-airdopes-311.png",
  },
  {
    id: 5,
    name: "boAt Airdopes 141 TWS Earbuds",
    price: 849,
    mrp: 4999,
    discount: "81% off",
    rating: 4.3,
    reviews: "164,684",
    image: "/boat-airdopes-141.png",
  },
  {
    id: 6,
    name: "boAt Bassheads 100 In Ear Wired Earphones",
    price: 297,
    mrp: 999,
    discount: "70% off",
    rating: 4.5,
    reviews: "415,395",
    image: "/boat-bassheads.png",
  }
];

const Contact = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">
        Amazon Clone - boAt Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-3"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-700">
              ⭐ {product.rating} ({product.reviews} reviews)
            </p>
            <p className="text-lg font-bold">
              ₹{product.price}{" "}
              <span className="line-through text-gray-500">₹{product.mrp}</span>
            </p>
            <p className="text-green-600 font-semibold">{product.discount}</p>
            <button className="mt-3 bg-yellow-500 text-black py-2 px-4 rounded-md w-full">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
