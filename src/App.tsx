/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Manufacturing } from "./pages/Manufacturing";
import { Contact } from "./pages/Contact";
import { ConsultationProvider } from "./context/ConsultationContext";

export default function App() {
  return (
    <ConsultationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="manufacturing" element={<Manufacturing />} />
            <Route path="contact-us" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ConsultationProvider>
  );
}

