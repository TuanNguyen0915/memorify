import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/home/Home"

import ProfilePage from "./pages/profilePage/ProfilePage"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import NotFound from "./pages/notFound/NotFound"
import { useSelector } from "react-redux"

const App = () => {
  const { currentUser } = useSelector((state) => state.user)
  return (
    <div className="w-full bg-[#f3f3f3] p-4 text-black-1">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={currentUser ? <Navigate to="/" /> : <RegisterPage />}
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
