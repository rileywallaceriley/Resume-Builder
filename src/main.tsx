import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { PrintDocument } from './print/PrintDocument'
import './styles.css'

const isPrintDocument = new URLSearchParams(window.location.search).get('print') === '1'

createRoot(document.getElementById('root')!).render(
  <StrictMode>{isPrintDocument ? <PrintDocument /> : <App />}</StrictMode>,
)
