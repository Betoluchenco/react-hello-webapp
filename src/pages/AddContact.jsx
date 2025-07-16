import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const AddContact = () => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    id: Date.now(),
    full_name: "",
    address: "",
    phone: "",
    email: "",
    img: "https://randomuser.me/api/portraits/lego/2.jpg"
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: contact });
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <input name="full_name" className="form-control mb-2" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" className="form-control mb-2" placeholder="Email" onChange={handleChange} required />
        <input name="phone" className="form-control mb-2" placeholder="Phone" onChange={handleChange} required />
        <input name="address" className="form-control mb-2" placeholder="Address" onChange={handleChange} required />
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default AddContact;
