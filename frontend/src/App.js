import './App.css';
import Navigation from './components/Navigation';
import Signin from './components/auth/Signin';
import Watchlists from './components/watchlist/Watchlists';
import CreateWatchlist from './components/watchlist/CreateWatchlist';
import AssetDetails from './components/watchlist/AssetDetails';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/watchlist" component={Watchlists} />
          <Route exact path="/create/watchlist" component={CreateWatchlist} />
          <Route exact path="/asset/details/:id" component={AssetDetails} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
