import axios from "axios";

// Base API URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Create a payment session (e.g., for Stripe, Razorpay, etc.)
 * @param {Object} paymentData - Payment details (amount, currency, orderId, etc.)
 * @param {string} token - Authentication token
 * @returns {Promise} - Resolves with the payment session data
 */
export const createPaymentSession = async (paymentData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/payments/create`, paymentData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating payment session:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Verify payment after the transaction is completed
 * @param {string} paymentId - The ID of the payment
 * @param {string} orderId - The ID of the related order
 * @param {string} token - Authentication token
 * @returns {Promise} - Resolves when payment verification is successful
 */
export const verifyPayment = async (paymentId, orderId, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/payments/verify`, 
      { paymentId, orderId }, 
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error verifying payment:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Get payment status for an order
 * @param {string} orderId - The ID of the order
 * @param {string} token - Authentication token
 * @returns {Promise} - Resolves with payment status
 */
export const getPaymentStatus = async (orderId, token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/payments/status/${orderId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching payment status:", error.response?.data || error.message);
    throw error;
  }
};
