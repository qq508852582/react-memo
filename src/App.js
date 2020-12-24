import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import {routeConfig} from './routeConfig';


function App() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    {
                        routeConfig.map(config => {
                            return (
                                <li key={config.path}>
                                    <Link to={config.path}>{config.name}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
                <hr/>
                {
                    routeConfig.map(config => {
                        return (
                            <Route exact={config.exact} key={config.path} path={config.path}
                                   component={config.component}/>
                        );
                    })
                }
                <hr/>
            </div>
        </BrowserRouter>
    );
}

export default App;
