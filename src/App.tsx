import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Introduction from "./Components/Introduction";
import About from "./Components/About";

function App() {
  return (
    <>
      <div className="w-screen">
        <Header />
        <Sidebar />
        <div className="ml-[90pxA] grid grid-cols-1">
          <div>
            <Introduction />
            <About />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
