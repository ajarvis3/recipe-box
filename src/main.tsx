import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const domNode: Element = document.getElementById("root") as Element;
const root = createRoot(domNode);
root.render(
   <GoogleOAuthProvider clientId="27350617841-urfjr97a7vs60desr6cvp7r65hhitclp.apps.googleusercontent.com">
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </GoogleOAuthProvider>,
);
