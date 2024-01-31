import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Login page</h1>
      <button className="btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  )
}

export default LoginPage
