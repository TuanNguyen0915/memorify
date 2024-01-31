import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import LoginPage from "./pages/home/authPage/LoginPage"
import ProfilePage from "./pages/profilePage/ProfilePage"

const App = () => {
  return (
    <div className="w-full bg-[#f3f3f3] p-4 text-black-1">
      {/* 2 blur circle */}
      <div className="blurCircle right-0 top-[-10%]"></div>
      <div className="blurCircle left-[-8rem] top-[36%]"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
