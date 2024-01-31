import MainSection from "../../components/MainSection/MainSection"
import Profile from "../../components/Profile/Profile"
import RightSideBar from "../../components/RightSideBar/RightSideBar"

const Home = () => {
  return (
    <div className="flex w-full justify-between gap-4 overflow-hidden">
      <div className="h-screen w-[30rem]">
        <Profile />
      </div>
      <div className="w-full">
        <MainSection />
      </div>
      <div className="z-10 h-screen w-[30rem]">
        <RightSideBar />
      </div>
    </div>
  )
}

export default Home
