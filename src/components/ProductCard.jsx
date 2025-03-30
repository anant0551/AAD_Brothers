import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductCard = ({ product, addToCart }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Card className="w-80 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={toggleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full ${
            isWishlisted ? "bg-red-500 text-white" : "bg-white text-gray-600"
          } transition`}
        >
          <Heart className="w-5 h-5" />
        </button>
      </div>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xl font-bold text-blue-600">${product.price}</span>
          <span className="text-sm text-gray-500">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < product.rating ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-3 mt-4">
          <Button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" /> Add to Cart
          </Button>
          <Button variant="outline" className="border border-blue-600">
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
