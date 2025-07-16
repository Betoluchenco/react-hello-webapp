// src/store.js
export const initialState = {
  contacts: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        )
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(c => c.id !== action.payload)
      };
    default:
      return state;
  }
};

