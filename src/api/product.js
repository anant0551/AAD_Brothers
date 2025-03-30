import axios from "axios";

// Base API URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Fetch all products
 * @returns {Promise} - Resolves with an array of products
 */
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Fetch a single product by ID
 * @param {string} productId - The ID of the product to fetch
 * @returns {Promise} - Resolves with product details
 */
export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Add a new product (Admin only)
 * @param {Object} productData - The product details
 * @param {string} token - Admin authentication token
 * @returns {Promise} - Resolves with created product
 */
export const addProduct = async (productData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/products`, productData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Update an existing product (Admin only)
 * @param {string} productId - The ID of the product to update
 * @param {Object} productData - Updated product details
 * @param {string} token - Admin authentication token
 * @returns {Promise} - Resolves with updated product
 */
export const updateProduct = async (productId, productData, token) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/products/${productId}`, productData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Delete a product (Admin only)
 * @param {string} productId - The ID of the product to delete
 * @param {string} token - Admin authentication token
 * @returns {Promise} - Resolves when product is deleted
 */
export const deleteProduct = async (productId, token) => {
  try {
    await axios.delete(`${API_BASE_URL}/api/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error deleting product:", error.response?.data || error.message);
    throw error;
  }
};
