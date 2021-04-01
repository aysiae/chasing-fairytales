import Home from './pages/home/home';
import Sidebar from './components/navigation/sidebar';
import Splash from './pages/splash/splash.js';
import Login from './pages/auth/login';
import CharacterForm from './pages/characters/character-form';
import Characters from './pages/characters/characters';
import PrivateRoutes from './routes/private';
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
      <Switch>
      <Route exaxt path='/test'>
          <Sidebar/>
      </Route>
      <PrivateRoutes exact path='/' component={Home}/>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/welcome'>
        <Splash/>
      </Route>
      <Route exact path ='/chars/add'>
          <CharacterForm/>
      </Route>
      <Route exact path='/chars'>
        <Characters />
      </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
