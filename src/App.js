import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Chat from "../src/components/Chat"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="appBody">
          <Sidebar />
          <Switch>
            {/* <Route exact path="/" component={Chat} />  */}
            <Route path="/room/:roomId" component={Chat} />
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
