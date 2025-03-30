import axios from "axios";

// Base API URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Fetch cart items for a user
 * @param {string} userId - The ID of the user
 * @param {string} token - Authentication token
 * @returns {Promise} - Resolves with the cart items
 */
export const getCartItems = async (userId, token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/cart/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Add an item to the cart
 * @param {string} userId - The ID of the user
 * @param {Object} itemData - Product details (productId, quantity, etc.)
 * @param {string} token - Authentication token
 * @returns {Promise} - Resolves with updated cart data
 */
export const addToCart = async (userId, itemData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/cart/${userId}`, itemData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding item to cart:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Update the quantity of a cart item
 * @param {string} userId - The ID of the user
 * @param {string} itemId - The ID of the cart item
 * @param {Object} updateData - Updated quantity { quantity: newQuantity }
 * @param {string} token - Authentication token
 * @returns {Promise} - Resolves with updated cart item
 */
export const updateCartItem = async (userId, itemId, updateData, token) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/cart/${userId}/${itemId}`, updateData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating cart item:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Remove an item from the cart
 * @param {string} userId - The ID of the user
 * @param {string} itemId - The ID of the cart item to remove
 * @param {string} token - Authentication token
 * @returns {Promise} - Resolves when the item is removed
 */
export const removeFromCart = async (userId, itemId, token) => {
  try {
    await axios.delete(`${API_BASE_URL}/api/cart/${userId}/${itemId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error("Error removing item from cart:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Clear all items from the cart
 * @param {string} userId - The ID of the user
 * @param {string} token - Authentication token
 * @returns {Promise} - Resolves when the cart is cleared
 */
export const clearCart = async (userId, token) => {
  try {
    await axios.delete(`${API_BASE_URL}/api/cart/${userId}/clear`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error("Error clearing cart:", error.response?.data || error.message);
    throw error;
  }
};
