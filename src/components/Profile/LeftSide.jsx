import FollowCard from "../LeftSideBar/FollowCard"
import SearchBar from "../LeftSideBar/SearchBar"
import InfoCard from "./InfoCard"

const LeftSide = () => {
  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-y-auto">
      <SearchBar />
      <InfoCard />
      <div className="z-10">
      <FollowCard />
      </div>
    </div>
  )
}

export default LeftSide