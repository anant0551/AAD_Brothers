import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { AuthProvider } from "./contexts/AuthContext.jsx"; // ✅ Ensure correct import
import store from "./redux/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </Provider>
);
