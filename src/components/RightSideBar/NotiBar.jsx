import { TbSquareRoundedChevronsDown } from "react-icons/tb"
import { GoGear } from "react-icons/go"
import { IoMdNotificationsOutline } from "react-icons/io"
import { TbMessage2 } from "react-icons/tb"
const NotiBar = ({ clickTrend, setClickTrend }) => {
  const handleClickTrend = () => {
    if (setClickTrend) setClickTrend(!clickTrend)
  }
  return (
    <div className="z-10 flexBetween w-full">
      <div onClick={handleClickTrend}>
        <TbSquareRoundedChevronsDown
          className={`text-3xl ${clickTrend ? "text-orange-1" : "-rotate-180"} duration-500`}
        />
      </div>
      <div>
        <GoGear className={`text-3xl`} />
      </div>
      <div>
        <IoMdNotificationsOutline className={`text-3xl`} />
      </div>
      <div>
        <TbMessage2 className={`text-3xl`} />
      </div>
    </div>
  )
}

export default NotiBar
