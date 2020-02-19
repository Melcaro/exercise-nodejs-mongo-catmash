import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { AppContainer } from './styles/AppStyle';

import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Scores } from './components/Scores';

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <div>
          <Route exact path="/" render={() => <Header />} />
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/scores" render={props => <Scores {...props} />} />
        </div>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
