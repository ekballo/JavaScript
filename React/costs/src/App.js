import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './componentes/pages/Home';
import Contact from './componentes/pages/Contact';
import Company from './componentes/pages/Company';
import NewProject from './componentes/pages/NewProject';


function App() {
  return (
    <Route>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/company'>
          <Company />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/newproject'>
          <NewProject />
        </Route>
      </Switch>
      <p>Footer</p>
    </Route>
  );
}

export default App;
