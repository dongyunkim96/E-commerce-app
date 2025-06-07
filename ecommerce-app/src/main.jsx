import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './CSS/index.css';
import App from './components/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
