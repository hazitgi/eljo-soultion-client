import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider } from "@apollo/client";
import client from "./api/graphql.js";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/store.js";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={reduxStore}>
        <Toaster position="top-center" />
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
