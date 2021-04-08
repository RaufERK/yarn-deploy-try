import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './Componens/About';
import Home from './Componens/Home';
import Users from './Componens/Users';

const App = () => {
  return (
    <div>
      <h1>APP</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
