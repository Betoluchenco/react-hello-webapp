import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPencilAlt,
  FaTrash
} from "react-icons/fa";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    if (store.contacts.length === 0) {
      dispatch({
        type: "SET_CONTACTS",
        payload: [
          {
            id: 1,
            full_name: "Mike Anamendolla",
            address: "5842 Hillcrest Rd",
            phone: "(870) 288-4149",
            email: "mike.ana@example.com",
            img: "https://randomuser.me/api/portraits/men/45.jpg"
          }
        ]
      });
    }
  }, []);

  const handleDelete = (id) => {
    if (confirm("¿Estás seguro de que quieres eliminar este contacto?")) {
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-success"
          onClick={() => navigate("/add-contact")}
        >
          Add new contact
        </button>
      </div>

      {store.contacts.map((contact) => (
        <div key={contact.id} className="card mb-3 p-3 contact-card">
          <div className="row align-items-center">
            <div className="col-md-2 text-center">
              <img
                src={contact.img}
                alt={contact.full_name}
                className="rounded-circle img-fluid"
              />
            </div>
            <div className="col-md-8">
              <h5>{contact.full_name}</h5>
              <p><FaMapMarkerAlt className="me-2" />{contact.address}</p>
              <p><FaPhone className="me-2" />{contact.phone}</p>
              <p><FaEnvelope className="me-2" />{contact.email}</p>
            </div>
            <div className="col-md-2 text-end">
              <button
                className="btn btn-link"
                onClick={() => navigate(`/edit/${contact.id}`)}
              >
                <FaPencilAlt />
              </button>
              <button
                className="btn btn-link text-danger"
                onClick={() => handleDelete(contact.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
