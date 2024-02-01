import { useState } from "react"
import { GoPencil } from "react-icons/go"
import Button from "../Button"

const InfoCard = () => {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className="flex w-full flex-col gap-4 rounded-3xl bg-white p-5">
      <div className="flexBetween mb-5">
        <p className="text-xl font-bold">username info</p>
        <GoPencil className="text-xl cursor-pointer" onClick={() => setIsEdit(!isEdit)}/>
      </div>
      <form className=" flex flex-col gap-4 px-2">
        <p>
          <span className="font-semibold">Status: </span>{" "}
          {isEdit ? (
            <input
              className="rounded-md bg-slate-400/10 px-4 py-2 outline-none"
              placeholder="status"
            />
          ) : (
            "in RelationShip"
          )}
        </p>
        <p>
          <span className="font-semibold">Lives: </span>
          {isEdit ? (
            <input
              className="rounded-md bg-slate-400/10 px-4 py-2 outline-none"
              placeholder="live in"
            />
          ) : (
            "Quincy, MA"
          )}
        </p>
        <p>
          <span className="font-semibold">Works: </span>
          {isEdit ? (
            <input
              className="rounded-md bg-slate-400/10 px-4 py-2 outline-none"
              placeholder="work"
            />
          ) : (
            "Work from home"
          )}
        </p>
        {isEdit && (
          <Button text={"Edit Profile"} />
        )}
      </form>
      <div className=" mt-10 flex w-full items-center justify-end">
        <Button text={"Log Out"} />
      </div>
    </div>
  )
}

export default InfoCard
