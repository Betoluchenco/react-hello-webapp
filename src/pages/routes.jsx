import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { Demo } from "./pages/Demo";
import Contact from "./pages/Contact";
import AddContact from "./pages/AddContact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="demo" element={<Demo />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="add-contact" element={<AddContact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
