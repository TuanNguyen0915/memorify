import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className="text-black-1 bg-[#f3f3f3] p-4 w-full">
      {/* 2 blur circle */}
      <div className="blurCircle right-0 top-[-10%]"></div>
      <div className="blurCircle left-[-8rem] top-[36%]"></div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
