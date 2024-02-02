import { SyncLoader } from "react-spinners"

const Spinner = ({ color }) => {
  return (
    <div className="h-full w-full flexCenter">
      <SyncLoader color={color} />
    </div>
  )
}

export default Spinner
