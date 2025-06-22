import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "./index.css";
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
/**
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
**/