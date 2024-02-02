import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-10">
      <p className="text-6xl font-bold">Sorry, this page not found !!!</p>
      <p className="text-3xl">
        Please,{" "}
        <span
          className="font-bold text-orange-1 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          back to homepage
        </span>
      </p>
    </div>
  )
}

export default NotFound
