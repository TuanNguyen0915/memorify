import avatar from "/avatar.jpeg"
import { FaSignOutAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector} from "react-redux"
import { userLogOut} from "../../redux/userSlice/userSlice"
const ProfileCard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)
  console.log(currentUser)
  const handleLogOut = () => {
    dispatch(userLogOut())
  }

  return (
    <div className="flex w-full flex-col gap-4 rounded-3xl bg-white">
      <div className="relative h-[150px] w-full">
        <div
          className="z-10 absolute right-5 top-5  rounded-lg bg-red-500 p-2 text-white opacity-60 duration-500 hover:scale-125 hover:opacity-100"
          onClick={handleLogOut}
        >
          <FaSignOutAlt />
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-t-3xl bg-black/40"></div>
        <img
          src="https://source.unsplash.com/random/500x150"
          alt="banner"
          className=" h-full w-full rounded-t-3xl object-cover"
          loading="lazy"
        />
      </div>
      <div className="flexCenter  -mb-16 -translate-y-16">
        <img
          src={avatar}
          alt="avatar"
          className="h-32 w-32 rounded-full"
          loading="lazy"
        />
      </div>
      {/* INFO */}
      <div className="  flex w-full flex-col items-center p-4">
        <p className="text-xl font-bold">Tuan Nguyen</p>
        <p>Junior FullStack</p>
      </div>
      <div className="flexCenter mx-4  border-b-2 border-t-2 border-hrColor p-4">
        <div className="flex w-full flex-col items-center justify-center border-e-2 border-hrColor">
          <p className="font-semibold">1235</p>
          <p className="text-gray-500">Followers</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <p className="font-semibold">1</p>
          <p className="text-gray-500">Following</p>
        </div>
      </div>
      <div className="flexCenter 0 my-4 w-full">
        <p
          className="cursor-pointer text-xl font-bold text-orange-1"
          onClick={() => navigate("/profile")}
        >
          My Profile
        </p>
      </div>
    </div>
  )
}

export default ProfileCard
