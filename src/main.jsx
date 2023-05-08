import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-rccarlj2n5n1kh04.us.auth0.com"
    clientId="oWFHX5iuzTVCRBdj5jV81VAk7sE2jl4n"
    redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
