// pages 
import Home from './pages/home/home';
import Sidebar from './components/navigation/sidebar';
import Splash from './pages/splash/splash.js';
import Login from './pages/auth/login';
import CharacterForm from './pages/characters/character-form';
import Characters from './pages/characters/characters';
import Worlds from './pages/worlds/worlds';
import Universes from './pages/universes/universes';
import Scenes from './pages/scenes/scenes';
import Notes from './pages/notes/notes';
import PrivateRoutes from './routes/private';

// dependencies
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// redux 
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  currUser: state.currUser
})



function App(props) {

  
  return (
    <>
    <Router>
      <Switch>
      <Route exact path='/test'>
          <Sidebar/>
      </Route>
      <Route exact path='/worlds'>
          <Worlds/>
      </Route>
      <Route exact path='/universes'>
          <Universes/>
      </Route>
      <Route exact path='/notes'>
          <Notes/>
      </Route>
      <Route exact path='/scenes'>
          <Scenes/>
      </Route>
      <PrivateRoutes exact path='/' auth={props.currUser.currUser} component={Home}/>
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

export default connect(mapStateToProps)(App);
