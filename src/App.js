// pages 
import Home from './pages/home/home';
import Splash from './pages/splash/splash.js';
import Login from './pages/auth/login';
import CharacterForm from './pages/characters/character-form';
import Characters from './pages/characters/characters';
import Worlds from './pages/worlds/worlds';
import Universes from './pages/universes/universes';
import Scenes from './pages/scenes/scenes';
import Notes from './pages/notes/notes';
import SingleChar from './pages/characters/single-char';
import Register from './pages/auth/register';

// routes
import PrivateRoutes from './routes/private';

// dependencies
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App(props) {

  
  return (
    <>
    <Router>
      <Switch>
      <Route exact path='/test'>
      </Route>
      <PrivateRoutes exact path='/worlds' component={Worlds}/>
      <PrivateRoutes exact path='/scenes' component={Scenes}/>
      <PrivateRoutes exact path='/universes' component={Universes}/>
      <PrivateRoutes exact path='/' component={Home}/>
      <PrivateRoutes exact path='/notes' component={Notes}/>
      <PrivateRoutes exact path='/chars' component={Characters}/>
      <PrivateRoutes exact path='/chars/add' component={CharacterForm}/>
      <PrivateRoutes exact path='/chars/:uuid' component={SingleChar}/>
      <Route exact path='/register'>
          <Register/>
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/welcome'>
        <Splash/>
      </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
