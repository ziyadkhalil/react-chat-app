import Content from "layout/Content/Content";
import Sidebar from "layout/Sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
