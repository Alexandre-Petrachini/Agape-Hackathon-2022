import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { redirectFromLogin } from './middlewares/redirectFromLogin'
import { withAuth } from './middlewares/withAuth'
import { Home } from './pages/home'

export function AppRoutes() {
  useEffect(() => {
    // TODO CALL TO API PASSING TOKEN TO GET INFORMATION ABOUT USER, TO DISPATCH USER TO REDUX HERE
  }, [])
  return (
    <Router>
      <Routes>
        <Route path="/" element={redirectFromLogin()} />
        <Route path="/login" element={redirectFromLogin()} />
        <Route path="/home" element={withAuth(<Home />)} />
      </Routes>
    </Router>
  )
}
