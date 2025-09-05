import React from 'react'
import frontend from './assets/frontendCode.png'
import backend from './assets/backendCode.png'
import apiResponse from './assets/apiResponce.png'
import ui from './assets/ui.png'
import './App.css'

const App = () => {
  return (
    <div className="container">

      <div id='frontend_code'> 
        <h2>Frontend Code</h2>
        <img src={frontend} alt="Frontend Code" />
      </div>
       <div id='backend_code'> 
        <h2>Backend Code</h2>
        <img src={backend} alt="Backend Code" />
      </div>
       <div id='api_response'> 
        <h2>API Response</h2>
        <img src={apiResponse} alt="API Response" />
      </div>
       <div id='UI'> 
        <h2>UI</h2>
        <img src={ui} alt="UI" />
      </div>
    </div>
  )
}

export default App