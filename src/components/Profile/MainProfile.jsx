import Button from "../Button"
import avatar from "/avatar.jpeg"
import { useNavigate } from "react-router-dom"
const MainProfile = () => {
  const navigate = useNavigate()
  return (
    <div className=" flex w-full flex-col gap-4 rounded-3xl bg-white">
      <div className="relative h-[300px] w-full">
        <div className=" absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-t-3xl bg-black/40"></div>
        <img
          src="https://source.unsplash.com/random/1000x500"
          alt="banner"
          className=" h-full w-full rounded-t-3xl object-cover"
          loading="lazy"
        />
      </div>
      <div className="flexCenter  -mb-16 -translate-y-24">
        <img
          src={avatar}
          alt="avatar"
          className="h-48 w-48 rounded-full"
          loading="lazy"
        />
      </div>
      {/* INFO */}
      <div className=" flex w-full flex-col items-center p-4">
        <p className="text-xl font-bold">Tuan Nguyen</p>
        <p>Junior FullStack</p>
      </div>

      <div className="flexCenter  mx-8 mb-5 border-b-2 border-t-2 border-hrColor p-4">
        <div className="flex w-full flex-col items-center justify-center border-e-2 border-hrColor ">
          <p className="font-semibold">1235</p>
          <p className="text-gray-500">Followers</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center border-e-2 border-hrColor">
          <p className="font-semibold">1</p>
          <p className="text-gray-500">Following</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <p className="font-semibold">5</p>
          <p className="text-gray-500">Posts</p>
        </div>
      </div>
      <div className="flexCenter mb-5 w-full ">
        <div className="fleCenter w-1/4" onClick={() => navigate("/")}>
          <Button text={"Back to HomePage"} />
        </div>
      </div>
    </div>
  )
}

export default MainProfile
