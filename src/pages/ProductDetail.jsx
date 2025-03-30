import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/product.js";
import useCart from "../hooks/useCart.js";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // ✅ Define error state

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(""); // ✅ Reset error before fetching

      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Failed to load product details."); // ✅ Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading product...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>; // ✅ Display error message

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{product?.name}</h2>
      <p>{product?.description}</p>
      <p className="text-lg font-semibold">${product?.price}</p>

      <button 
        onClick={() => addToCart(product)} 
        className="bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
