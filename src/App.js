import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Chat from "../src/components/Chat"
import {useState} from "react"
import Login from './components/Login';
import { useStateValue } from './context/StateProvider';
function App() {
  // const [{user},dispatch] = useStateValue();
  const [user,setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login user={user} setUser={setUser}/>
        ) : (
          <>
          <Header user={user} />
          <div className="appBody">
            <Sidebar user={user} />
            <Switch>
              {/* <Route exact path="/" component={Chat} />  */}
              <Route path="/room/:roomId" component={()=><Chat user={user} />} />
            </Switch>
          </div>
          </>
          )}
        
      </Router>
      
    </div>
  );
}

export default App;
