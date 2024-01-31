import LeftSide from "../../components/Profile/LeftSide"
import MainProfile from "../../components/Profile/MainProfile"
import RightSideBar from "../../components/RightSideBar/RightSideBar"
const ProfilePage = () => {
  return (
    <div className="flex w-full justify-between gap-4 overflow-hidden">
      <div className="h-screen w-[30rem]">
        <LeftSide />
      </div>
      <div className="w-full">
        <MainProfile />
      </div>
      <div className="z-10 h-screen w-[30rem]">
        <RightSideBar />
      </div>
    </div>
  )
}

export default ProfilePage
