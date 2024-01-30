import MainSection from "../../components/MainSection";
import Profile from "../../components/Profile";
import RightSideBar from "../../components/RightSideBar";

const Home = () => {
  return (
    <div className="w-full flex items-center justify-between gap-4">
      <Profile />
      <MainSection />
      <RightSideBar />
    </div>
  );
};

export default Home;
