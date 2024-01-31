import FollowCard from "./FollowCard"
import ProfileCard from "./ProfileCard"
import SearchBar from "./SearchBar"

const Profile = () => {
  return (
    <section className="flex h-full w-full flex-col gap-4 overflow-y-auto">
      <SearchBar />
      <ProfileCard />
      <FollowCard />
    </section>
  )
}

export default Profile
