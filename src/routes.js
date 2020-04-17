import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Header from './Components/Header';
import Erro from './Pages/Erro';
import Filme from './Pages/Filme';

export default function Routes() {
    return (
        <BrowserRouter>
            <Header />

            <div className="container">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/filme/:id' component={Filme} />

                    <Route path='*' component={Erro} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}