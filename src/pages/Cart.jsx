import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";


const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-500">Continue Shopping</Link></p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border p-4 rounded-lg shadow-sm">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price} x {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">Total: ${totalPrice()}</h3>
            <Link to="/checkout">
              <button className="bg-green-500 px-4 py-2 text-white mt-4 rounded">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
