import Home from './layouts/pages/home/home'
import Header from './layouts/components/header/header'
import Login from './layouts/pages/auth/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
    </Router>
    </>
  );
}

export default App;
