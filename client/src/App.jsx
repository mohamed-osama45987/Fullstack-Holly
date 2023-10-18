import './App.css'
import { Route, Routes } from "react-router-dom"

import SignInPage from "./pages/SignIn"
import SignUpPage from "./pages/SignUp"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<SignInPage />} />

      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  )
}

export default App
