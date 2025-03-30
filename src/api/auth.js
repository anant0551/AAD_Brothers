import axios from "axios";

// Base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * User Login API Call
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise} - Resolves with login response data
 */
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/login`, { email, password }, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * User Signup API Call
 * @param {Object} userData - User registration details
 * @returns {Promise} - Resolves with signup response data
 */
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/signup`, userData, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Signup error:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Fetch Current User Data (if logged in)
 * @returns {Promise} - Resolves with user data
 */
export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/auth/me`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Fetch user error:", error.response?.data || error.message);
    throw error;
  }
};
/**
 * Fetch User Profile (Explicitly named function)
 * @returns {Promise} - Resolves with user profile data
 */
export const getUserProfile = async () => {
  return getCurrentUser(); // Reuse getCurrentUser for consistency
};

/**
 * User Logout API Call
 * @returns {Promise} - Resolves when logout is successful
 */
export const logout = async () => {
  try {
    await axios.post(`${API_BASE_URL}/api/auth/logout`, {}, { withCredentials: true });
  } catch (error) {
    console.error("Logout error:", error.response?.data || error.message);
    throw error;
  }
};
