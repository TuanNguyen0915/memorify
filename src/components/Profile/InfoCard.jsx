import { useState } from "react"
import { GoPencil } from "react-icons/go"

const InfoCard = () => {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className="flex w-full flex-col gap-4 rounded-3xl bg-white p-5">
      <div className="flexBetween mb-5">
        <p className="text-xl font-bold">username info</p>
        <GoPencil className="text-xl" onClick={() => setIsEdit(!isEdit)} />
      </div>
      <form className="z-10 flex flex-col gap-4 px-2">
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
          <button className="btn rounded-md border border-orange-1 px-4 py-2 text-white duration-500 hover:bg-none hover:text-orange-1">
            Edit Profile
          </button>
        )}
      </form>
      <div className="mt-10 flex w-full items-center justify-end">
        <button className="btn rounded-md border border-orange-1 px-4 py-2 text-white duration-500 hover:bg-none hover:text-orange-1">
          Log Out
        </button>
      </div>
    </div>
  )
}

export default InfoCard
