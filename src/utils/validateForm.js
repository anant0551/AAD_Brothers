export const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  export const validatePassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password); // Minimum 8 characters, 1 letter & 1 number
  };
  
  export const validateRequired = (value) => {
    return value.trim() !== "";
  };
  