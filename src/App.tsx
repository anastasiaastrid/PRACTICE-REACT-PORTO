import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Profilepic from "./Components/Profilepic";
import Introduction from "./Components/Introduction";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <Introduction />
        </div>
        <div className="hidden md:block col-span-1 ml-[90px]">
          <Profilepic />
        </div>
      </div>
    </>
  );
}

export default App;
