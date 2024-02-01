const Button = ({ text }) => {
  return (
    <button
      type="button"
      className="w-full rounded-lg border border-orange-1 bg-orange-1 px-4 py-2 text-white duration-500 hover:bg-transparent hover:text-orange-1"
    >
      {text}
    </button>
  )
}

export default Button
