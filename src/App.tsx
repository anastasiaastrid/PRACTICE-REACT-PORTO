import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Profilepic from "./Components/Profilepic";
import Introduction from "./Components/Introduction";
import About from "./Components/About";

function App() {
  return (
    <>
      <div className="w-screen">
        <Header />
        <Sidebar />
        <div className="ml-[90pxA] grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <Introduction />
            <About />
          </div>

          <div className="hidden md:block col-span-1 ml-[90px]">
            <Profilepic />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
