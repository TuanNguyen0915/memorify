import FollowCard from "./FollowCard";
import ProfileCard from "./ProfileCard";
import SearchBar from "./SearchBar";

const Profile = () => {
  return (
    <section className="flex w-[30rem] flex-col gap-4 overflow-auto">
      <SearchBar />
      <ProfileCard />
      <FollowCard />
    </section>
  );
};

export default Profile;
