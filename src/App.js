import logo from './logo.svg';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
