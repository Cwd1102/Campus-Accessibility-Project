import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import { AuthProvider } from "./Auth.tsx";
//import { AuthProvider } from "./auth";
//import { AuthProvider } from "./components/Authenticate";

createRoot(document.getElementById("root")!).render(


    <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StrictMode>

);
