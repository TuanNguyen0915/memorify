import { motion } from "framer-motion"
import { TrendData } from "../../data"
const TrendCard = () => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col rounded-3xl bg-white p-4"
    >
      <p className="text-3xl font-semibold">Hot trend for you</p>
      <div className="flex w-full flex-col gap-2 p-4">
        {TrendData.map((data, idx) => (
          <div key={idx} className="flex w-full flex-col gap-1">
            <p className="font-semibold text-orange-1">#{data.name}</p>
            <p className="text-sm text-slate-500">{data.shares}k shares</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default TrendCard
