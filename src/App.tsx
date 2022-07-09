import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Error from './pages/Error';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import history from './history';

// https://github.com/nhn-kai/fc-my-books
const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/add" component={Add} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/book/:id" component={Detail} />
            <Route exact component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ConnectedRouter>
    </ErrorBoundary>
  );
};

export default App;

// npm install --save @types/react @types/react-dom @types/react-router-dom
// npm i @types/react-redux @types/redux-actions -D
