import NavBar from "../NavBar/NavBar"

import Feed from "./Feed"

const MainSection = () => {
  return (
    <section className="flex h-full w-full">
      <div className="w-full-h-full z-1 absolute"></div>
      <div className="flex w-full flex-col">
        <NavBar />

        <Feed />
      </div>
    </section>
  )
}

export default MainSection
