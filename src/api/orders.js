import axios from "axios";

// Base API URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Fetch orders for a specific user
 * @param {string} userId - The ID of the user
 * @param {string} token - Authentication token
 * @returns {Promise} - Resolves with the list of orders
 */
export const getOrders = async (userId, token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/orders/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Place a new order
 * @param {string} userId - The ID of the user
 * @param {Object} orderData - Order details (cart items, shipping info, total price, etc.)
 * @param {string} token - Authentication token
 * @returns {Promise} - Resolves with the created order data
 */
export const placeOrder = async (userId, orderData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/orders/${userId}`, orderData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error placing order:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Get details of a specific order
 * @param {string} orderId - The ID of the order
 * @param {string} token - Authentication token
 * @returns {Promise} - Resolves with order details
 */
export const getOrderDetails = async (orderId, token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/orders/details/${orderId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching order details:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Cancel an order
 * @param {string} orderId - The ID of the order to cancel
 * @param {string} token - Authentication token
 * @returns {Promise} - Resolves when the order is successfully canceled
 */
export const cancelOrder = async (orderId, token) => {
  try {
    await axios.delete(`${API_BASE_URL}/api/orders/cancel/${orderId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error("Error canceling order:", error.response?.data || error.message);
    throw error;
  }
};
