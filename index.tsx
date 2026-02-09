
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Iniciando aplicação...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Erro: Elemento #root não encontrado no DOM.");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
