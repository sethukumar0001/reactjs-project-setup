import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Toaster } from "sonner";
import ErrorBoundary from "./ErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
/* -------------------------------------------------------------------------- */
/*                               UseState Section                             */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                               React Query Section                          */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                               API Section                                  */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                               Onchange section                             */
/* -------------------------------------------------------------------------- */

root.render(
  <React.StrictMode>
    <Toaster richColors closeButton />
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
