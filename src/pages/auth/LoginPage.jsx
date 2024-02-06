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

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading } = useSelector((state) => state.user)
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
    try {
      dispatch(authStart())
      const data = await authServices.login(formData)
      if (!data.success) {
        dispatch(authFailure(data.message))
        setErrMessage(data.message)
      } else {
        dispatch(authSuccess(data))
        toast.success(data.message)
        navigate("/")
      }
    } catch (error) {
      dispatch(authFailure(error))
    }
  }

  return (
    <div className="md:flexCenter flex h-screen w-full flex-col gap-20 md:flex-row">
      <div className="absolute  top-[-5rem] h-[300px] right-[-2rem] w-[300px] rounded-3xl bg-blue-400 blur-[10rem] "></div>
      <div className="absolute left-[-10rem] top-[10rem]  h-[300px] w-[300px] rounded-full bg-orange-400 blur-[10rem] "></div>

      <div className="z-10 flex flex-col items-center justify-center">
        <p
          className="mb-10 cursor-pointer text-7xl font-bold text-orange-1"
          onClick={() => navigate("/")}
        >
          Memorify
        </p>
        <p className="text-xl font-semibold">Saving your moments</p>
      </div>
      
      <div className="z-10 flex w-full flex-col gap-4 rounded-xl bg-white p-8 md:w-1/3 md:min-w-[30rem]">
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
              <button
                disabled={loading}
                className="flexCenter h-[40px] w-full rounded-lg border border-orange-1 bg-orange-1 px-4 py-2 text-white duration-500 hover:bg-transparent hover:text-orange-1 disabled:opacity-70 disabled:hover:bg-orange-1"
              >
                {loading ? <Spinner color="white" /> : "Login"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
