import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card.jsx'
import './index.css'
import {portfolio} from './Portfolio.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Card name={portfolio[0].name} stack={portfolio[0].stack}  />
        <Card name={portfolio[1].name} stack={portfolio[1].stack} />
        <Card name={portfolio[2].name} stack={portfolio[2].stack} />
        <Card name={portfolio[3].name} stack={portfolio[3].stack} />
    
  </React.StrictMode>,
)
