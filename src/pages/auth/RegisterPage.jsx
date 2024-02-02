import { useNavigate } from "react-router-dom"
import { useState } from "react"
import * as authServices from "../../services/auth"
import { toast } from "react-toastify"
import {
  authFailure,
  authStart,
  authSuccess,
} from "../../redux/userSlice/userSlice"
import { useDispatch, useSelector } from "react-redux"
import Spinner from "../../components/spinner/Spinner"

const RegisterPage = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.user)
  const [errMessage, setErrMessage] = useState(null)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    userName: "",
  })

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    // check confirmPassword
    if (formData.confirmPassword !== formData.password) {
      setErrMessage("Password is not matching")
    } else {
      try {
        dispatch(authStart())
        const data = await authServices.register(formData)
        if (!data.success) {
          dispatch(authFailure(data.message))
          setErrMessage(data.message)
        } else {
          dispatch(authSuccess(data))
          toast.success(data.message)
          navigate("/")
        }
      } catch (error) {
        toast.error(error.message)
        dispatch(authFailure(error))
      }
    }
  }

  return (
    <div className="md:flexCenter flex h-screen w-full flex-col gap-20 md:flex-row">
      <div className="absolute right-0 top-[-1rem] h-[300px]  w-[300px] rounded-3xl bg-blue-200 blur-[10rem]"></div>
      <div className="absolute left-[-10rem] top-[10rem] h-[300px]  w-[300px] rounded-full bg-orange-400 blur-[10rem]"></div>
      <div className=" flex flex-col items-center justify-center">
        <p
          className="mb-10 cursor-pointer text-7xl font-bold text-orange-1"
          onClick={() => navigate("/")}
        >
          Memorify
        </p>
        <p className="text-xl font-semibold">Saving your moments</p>
      </div>
      <div className="flex min-w-[50rem] flex-col gap-4 rounded-xl bg-white p-8">
        <p className="w-full pb-4 text-center text-2xl font-bold">Register</p>
        {errMessage && (
          <p className="w-full pb-4 text-center text-xl text-orange-1">
            {errMessage}
          </p>
        )}
        <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
          <div className="flexBetween flex gap-4">
            <input
              onChange={handleOnChange}
              value={formData.firstName}
              name="firstName"
              required
              autoComplete="off"
              type="text"
              placeholder="First Name"
              className="w-full rounded-lg bg-slate-400/10 p-4 outline-none"
            />
            <input
              onChange={handleOnChange}
              required
              autoComplete="off"
              type="text"
              value={formData.lastName}
              name="lastName"
              placeholder="Last Name"
              className="w-full rounded-lg bg-slate-400/10 p-4 outline-none"
            />
          </div>
          <input
            onChange={handleOnChange}
            required
            autoComplete="off"
            value={formData.email}
            name="email"
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-slate-400/10 p-4 outline-none"
          />
          <input
            onChange={handleOnChange}
            required
            autoComplete="off"
            type="text"
            value={formData.userName}
            name="userName"
            placeholder="Username"
            className="w-full rounded-lg bg-slate-400/10 p-4 outline-none"
          />
          <div className="flexBetween flex gap-4">
            <input
              onChange={handleOnChange}
              required
              autoComplete="off"
              value={formData.password}
              name="password"
              type="password"
              placeholder="Password"
              className="w-full rounded-lg bg-slate-400/10 p-4 outline-none"
            />
            <input
              onChange={handleOnChange}
              required
              autoComplete="off"
              value={formData.confirmPassword}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-lg bg-slate-400/10 p-4 outline-none"
            />
          </div>

          <p>
            Already have an account?{" "}
            <span
              className="cursor-pointer text-orange-1"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>

          <div className="flexCenter  w-full">
            <div className="flexCenter w-1/2">
              <button
              disabled={loading}
              className="flexCenter h-[40px] w-full rounded-lg border border-orange-1 bg-orange-1 px-4 py-2 text-white duration-500 hover:bg-transparent hover:text-orange-1 disabled:hover:bg-orange-1 disabled:opacity-70">
                {loading ? <Spinner color="white" /> : "Register"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
