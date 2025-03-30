import { useState } from "react";
import useCart from "../hooks/useCart";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  // State for user details
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "credit-card",
  });

  // Handle input change
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  // Handle order submission
  const handleOrder = (e) => {
    e.preventDefault();
    if (!userDetails.name || !userDetails.email || !userDetails.address) {
      alert("Please fill in all details.");
      return;
    }

    // Simulating order placement
    setTimeout(() => {
      alert("Order placed successfully!");
      clearCart(); // Clear the cart after checkout
      navigate("/"); // Redirect to home page
    }, 1000);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. <a href="/" className="text-blue-500">Continue Shopping</a></p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between py-2 border-b">
                <span>{item.name} (x{item.quantity})</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mb-4">Total: ${totalPrice()}</h3>

          <form onSubmit={handleOrder} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={userDetails.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userDetails.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              value={userDetails.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            <select
              name="paymentMethod"
              value={userDetails.paymentMethod}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cod">Cash on Delivery</option>
            </select>

            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
