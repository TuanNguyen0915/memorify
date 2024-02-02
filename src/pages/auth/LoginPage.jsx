import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useState } from "react"
import * as authServices from "../../services/auth"
import { toast } from "react-toastify"

const LoginPage = () => {
  const navigate = useNavigate()
  const [errMessage, setErrMessage] = useState(null)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const user = await authServices.login(formData)
    if (!user.success) {
      setErrMessage(user.message)
    } else {
      toast.success(user.message)
      navigate("/")
    }
  }

  return (
    <div className="md:flexCenter flex h-screen w-full flex-col gap-20 md:flex-row">
      <div className="absolute right-[-10rem] top-[-10rem] h-[300px]  w-[300px] rounded-3xl bg-blue-200 blur-[10rem]"></div>
      <div className="absolute left-[-10rem] top-[10rem] h-[300px]  w-[300px] rounded-full bg-orange-400 blur-[10rem]"></div>

      <div className="absolute right-5 top-0 h-[300px]  w-[300px] rounded-full bg-blue-400 blur-[5rem]"></div>

      <div className=" flex flex-col items-center justify-center">
        <p
          className="mb-10 cursor-pointer text-7xl font-bold text-orange-1"
          onClick={() => navigate("/")}
        >
          Memorify
        </p>
        <p className="text-xl font-semibold">Saving your moments</p>
      </div>
      <div className="flex min-w-[30rem] flex-col gap-4 rounded-xl bg-white p-8">
        <p className="w-full pb-4 text-center text-2xl font-bold">Log In</p>
        {errMessage && (
          <p className="w-full pb-4 text-center text-lg text-orange-1">
            {errMessage}
          </p>
        )}
        <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
          <input
            onChange={handleOnChange}
            value={setFormData.email}
            name="email"
            required
            autoComplete="off"
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-slate-400/10 p-4 outline-none"
          />
          <input
            onChange={handleOnChange}
            required
            name="password"
            value={formData.password}
            autoComplete="off"
            type="password"
            placeholder="Password"
            className="w-full rounded-lg bg-slate-400/10 p-4 outline-none"
          />
          <div className="flexBetween flex gap-4">
            <p>
              Don&#39;t have an account?{" "}
              <span
                className="cursor-pointer text-orange-1"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </p>
            <p className="hover:text-orange-1">Forgot password?</p>
          </div>
          <div className="flexCenter w-full">
            <div className="flexCenter w-1/2">
              <Button text={"Log In"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
