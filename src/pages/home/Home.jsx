import MainSection from "../../components/MainSection/MainSection"
import Profile from "../../components/LeftSideBar/Profile"
import RightSideBar from "../../components/RightSideBar/RightSideBar"

const Home = () => {
  return (
    <main className="w-full h-full">
      <div className="flex w-full justify-between gap-4 overflow-hidden">
        <div className="hidden h-screen w-[30rem] xl:block">
          <Profile />
        </div>
        <div className="w-full">
          <MainSection />
        </div>
        <div className=" hidden h-screen w-[30rem] xl:block">
          <RightSideBar />
        </div>
      </div>
    </main>
  )
}

export default Home
