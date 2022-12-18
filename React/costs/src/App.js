import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './componentes/pages/Home';
import Contact from './componentes/pages/Contact';
import Company from './componentes/pages/Company';
import NewProject from './componentes/pages/NewProject';
import Container from './componentes/Layout/Container';

function App() {
  return (
    <Route>
      <ul>
        <li to="/">Home</li>
        <li to="contact">Contato</li>
        <li to="/company">Empresa</li>
        <li to="newproject">NewProject</li>
      </ul>

      <Switch>
        <Container>
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
        </Container>
      </Switch>
      <p>Footer</p>
    </Route>
  );
}

export default App;
