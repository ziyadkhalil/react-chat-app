import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Message from "./components/Message/Message";
import MessengerTextArea from "./components/MessengerTextArea/MessengerTextArea";
import Sidebar from "./components/Sidebar/Sidebar";
import Messenger from "./views/Messenger/Messenger";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <div className="content">
          <Switch>
            <Route exact path="/messenger/:id">
              <Messenger />
            </Route>
            <Route path="/">
              <Redirect to="/messenger/1" />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
