import axios from "axios";

// Base API URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * User Login API
 * @param {Object} credentials - User credentials { email, password }
 * @returns {Promise} - Resolves with user data and token
 */
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/login`, credentials, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * User Signup API
 * @param {Object} userData - User registration data { name, email, password }
 * @returns {Promise} - Resolves with created user data
 */
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/signup`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Fetch User Profile
 * @param {string} token - Authentication token
 * @returns {Promise} - Resolves with user profile data
 */
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Update User Profile
 * @param {string} token - Authentication token
 * @param {Object} userData - Updated user information
 * @returns {Promise} - Resolves with updated user data
 */
export const updateUserProfile = async (token, userData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/auth/update`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Logout User
 * @returns {Promise} - Resolves when user is logged out
 */
export const logoutUser = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/logout`);
    return response.data;
  } catch (error) {
    console.error("Error logging out:", error.response?.data || error.message);
    throw error;
  }
};
