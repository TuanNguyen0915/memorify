import { useState } from "react"

import TrendCard from "./TrendCard"
import NotiBar from "./Notibar"

const RightSideBar = () => {
  const [clickTrend, setClickTrend] = useState(false)

  return (
    <section className="flex w-full flex-col gap-4">
      <NotiBar clickTrend={clickTrend} setClickTrend={setClickTrend} />
      {clickTrend && <TrendCard />}
    </section>
  )
}

export default RightSideBar
