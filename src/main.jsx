import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const Context = createContext({ isCustomerAuthenticated: false });

const AppWrapper = () => {
  const [isCustomerAuthenticated, setIsCustomerAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [properties, setProperties]  = useState([]);

  return (
    <Context.Provider
      value={{ isCustomerAuthenticated, setIsCustomerAuthenticated, user, setUser, properties, setProperties }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
