import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
import ServiceTeamPage from "./components/ServiceTeamPage";
import ContactPage from "./components/ContactPage";
import KontaktBeratungPage from "./components/KontaktBeratungPage";
import PrivacyPage from "./components/PrivacyPage";
import ImprintPage from "./components/ImprintPage";
import EmployerObligationsPage from "./components/EmployerObligationsPage";
import AktuellesPage from "./components/AktuellesPage";
import DieBavPage from "./components/DieBavPage.jsx";
import BkvPage from "./components/BkvPage.jsx";
import BuvPage from "./components/BuvPage.jsx";
import { Toaster } from "./components/ui/toaster.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="/ueber-uns/service-team" element={<ServiceTeamPage />} />
          <Route path="/bav-rechtliche-grundlagen" element={<EmployerObligationsPage />} />
          <Route path="/die-bav" element={<DieBavPage />} />
          <Route path="/die-bav/aktuelles" element={<AktuellesPage />} />
          <Route path="/bkv" element={<BkvPage />} />
          <Route path="/buv" element={<BuvPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/kontakt/beratung" element={<KontaktBeratungPage />} />
          <Route path="/aktuelles" element={<AktuellesPage />} />
          <Route path="/datenschutz" element={<PrivacyPage />} />
          <Route path="/datenschutzerklaerung" element={<PrivacyPage />} />
          <Route path="/impressum" element={<ImprintPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;