import MainSection from "../../components/MainSection";
import Profile from "../../components/Profile/Profile";
import RightSideBar from "../../components/RightSideBar";

const Home = () => {
  return (
    <div className="w-full flex justify-between gap-4">
      <Profile />
      <MainSection />
      <RightSideBar />
    </div>
  );
};

export default Home;
