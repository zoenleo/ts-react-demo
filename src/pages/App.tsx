import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './App.scss'

import Logo from './Logo'

class App extends Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <HashRouter>
                        <Switch>
                            <Route exact={true} path="/logo" component={Logo} />
                        </Switch>
                    </HashRouter>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}

export default App
