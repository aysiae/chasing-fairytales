import Home from './layouts/pages/home/home'
import HeroHeader from './layouts/components/header/hero-header.js'
import Login from './layouts/pages/auth/login'
import CharacterForm from './layouts/pages/characters/character-form'
import Characters from './layouts/pages/characters/characters'
import PrivateRoutes from './routes/private'
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
          <HeroHeader/>
      </Route>
      <PrivateRoutes exact path='/' component={Home}/>
      <Route exact path='/login'>
        <Login />
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
