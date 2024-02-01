import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
const LoginPage = () => {
  
  const navigate = useNavigate()
  return (
    <div className="md:flexCenter flex h-screen w-full flex-col gap-20 md:flex-row">
      <div className=" flex flex-col items-center justify-center">
        <p className="mb-10 text-7xl font-bold text-orange-1 cursor-pointer" onClick={()=>navigate('/')}>Memorify</p>
        <p className="text-xl font-semibold">Saving your moments</p>
      </div>
      <div className="flex min-w-[50rem] flex-col gap-4 rounded-xl bg-white p-8">
        <p className="w-full pb-4 text-center text-2xl font-bold">Log In</p>
        <form className="flex flex-col gap-4">
          <input
            required
            autoComplete="off"
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-slate-400/10 p-4 outline-none"
          />
          <input
            required
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
