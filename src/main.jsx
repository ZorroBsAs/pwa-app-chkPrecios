
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// Registrar Service Worker para PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker registrado', reg))
      .catch(err => console.log('Fallo al registrar Service Worker', err))
  })}