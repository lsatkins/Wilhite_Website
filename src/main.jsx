import 'bootstrap/dist/css/bootstrap.min.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import ReactDOM from 'react-dom/client'
import BaseLayout from './components/layout/BaseLayout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path='/search' element={<Search />}/> */}
          {/* <Route path='/job-details/:id' element={<SearchDetails />}/> */}
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
)
