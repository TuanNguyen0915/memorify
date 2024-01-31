import { GoPencil } from "react-icons/go"

const InfoCard = () => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-3xl bg-white p-5">
      <div className="flexBetween mb-5">
        <p className="text-xl font-bold">username info</p>
        <GoPencil className="text-xl" />
      </div>
      <div className="flex flex-col gap-4 px-2">
        <p>
          <span className="font-semibold">Status </span> in RelationShip
        </p>
        <p>
          <span className="font-semibold">Lives in </span>Quincy, MA
        </p>
        <p>
          <span className="font-semibold">Works at </span>Work from home
        </p>
      </div>
      <div className="mt-10 flex w-full items-center justify-end">
        <button className="btn rounded-md border border-orange-1 px-4 py-2 text-white duration-500 hover:bg-none hover:text-orange-1">
          Log Out
        </button>
      </div>
    </div>
  )
}

export default InfoCard
