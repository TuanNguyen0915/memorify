import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"

import ProfilePage from "./pages/profilePage/ProfilePage"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"

const App = () => {
  return (
   
      <div className="w-full bg-[#f3f3f3] p-4 text-black-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    
  )
}

export default App
