import './App.css';
import Home from './components/Home/Home';
import MealDetail from './components/MealDetail/MealDetail';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/meal/:id'>
            <MealDetail />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
