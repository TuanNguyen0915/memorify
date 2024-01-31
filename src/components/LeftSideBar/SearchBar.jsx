
import { IoIosSearch } from "react-icons/io";
const SearchBar = () => {
  return (
    <div className="gap-2 w-full flex opacity-80 hover:opacity-100 duration-300">
      <div className="bg-white flexBetween w-full  gap-1 rounded-lg">
        <input type="text"  placeholder="#explore" className="w-full outline-none bg-transparent p-2"/>
        <div className="btn p-3 rounded-md flexCenter hover:cursor-pointer">
        <IoIosSearch className="scale-150 text-white"/>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
