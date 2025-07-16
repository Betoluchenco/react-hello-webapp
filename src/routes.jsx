import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import AddContact from "./pages/AddContact.jsx";
import { Layout } from "./pages/Layout.jsx";

const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Contact />} />
      <Route path="/add-contact" element={<AddContact />} />
    </Route>
  </Routes>
);

export default AppRoutes;
