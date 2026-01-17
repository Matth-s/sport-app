import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";

import AuthLayout from "./pages/authentification/AuthLayout.tsx";
import ConnexionPage from "./pages/authentification/ConnexionPage.tsx";
import InscriptionPage from "./pages/authentification/InscriptionPage.tsx";
import ConfirmationEmailPage from "./pages/authentification/ConfirmationEmailPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="authentification" element={<AuthLayout />}>
        <Route path="connexion" element={<ConnexionPage />} />
        <Route path="inscription" element={<InscriptionPage />} />
        <Route path="confirmation-email" element={<ConfirmationEmailPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
