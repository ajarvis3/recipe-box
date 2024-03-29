import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";

const domNode: Element = document.getElementById("root") as Element;
const root = createRoot(domNode);
root.render(
   <GoogleOAuthProvider clientId="27350617841-urfjr97a7vs60desr6cvp7r65hhitclp.apps.googleusercontent.com">
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Breaks it? https://github.com/facebook/create-react-app/issues/10109#issuecomment-752421290
reportWebVitals(console.log);
