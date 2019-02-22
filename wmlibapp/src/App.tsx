import * as React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import './App.css';

import AddItem from './components/AddItem';
import DeleteItem from './components/DeleteItem';
import BorrowItem from './components/BorrowItem';
import ReturnItem from './components/ReturnItem';
import DisplayItem from './components/DisplayItem';
import GenerateReport from './components/GenerateReport';

import LeftNavigation from './components/LeftNavigation';

import NavBar from './components/NavBar';

class App extends React.Component {
    public render() {
        const routes = [
            {
                path: "/",
                exact: true,
                component: AddItem
            }, {
                path: "/index",
                exact: true,
                component: AddItem
            }, {
                path: "/AddItem",
                component: AddItem
            }, {
                path: "/DeleteItem",
                component: DeleteItem
            }, {
                path: "/BorrowItem",
                component: BorrowItem
            }, {
                path: "/ReturnItem",
                component: ReturnItem
            }, {
                path: "/DisplayItem",
                component: DisplayItem
            }, {
                path: "/GenerateReport",
                component: GenerateReport
            }
        ];

        return (
            <HashRouter basename={process.env.REACT_APP_ROUTER_BASE || '/wmlib'}>
                <div className="App">
                    <LeftNavigation className="sidebar"></LeftNavigation>
                    <div className="header">
                        <NavBar></NavBar>
                    </div>
                    <div className="body">

                        {routes.map((route, index) => (<Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}/>))}

                    </div>
                    <div className="footer">
                        <p>Copyright &copy; 2018 WM Library</p>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
