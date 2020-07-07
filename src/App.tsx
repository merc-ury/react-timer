import React, { FunctionComponent } from 'react';
import { TimerProvider } from './data/TimerContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './navbar/Navbar';
import { Listview } from './listview/Listview';
import { CreateTimer } from './create/CreateTimer';
import { About } from './about/About';

export const App: FunctionComponent = () => {
  return (
    <TimerProvider>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={ Listview } />
          <Switch>
            <Route path="/about" component={ About } />
            <Route path="/create" component={ CreateTimer } />
          </Switch>
        </BrowserRouter>
      </div>
    </TimerProvider>
  );
};