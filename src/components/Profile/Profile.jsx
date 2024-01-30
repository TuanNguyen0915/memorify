import ProfileCard from "./ProfileCard";
import SearchBar from "./SearchBar";

const Profile = () => {
  return (
    <section className="flex w-[18rem] flex-col gap-4 overflow-auto bg-red-200">
      <SearchBar /> 
      <ProfileCard />
    </section>
  );
};

export default Profile;
