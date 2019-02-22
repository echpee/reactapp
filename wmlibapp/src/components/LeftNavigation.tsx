import * as React from 'react';

import {  NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class LeftNavigation extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className='wm-Nav-LeftPane '>
                <ul className="Sidebar-Menu">
                <li>
                <a href="#/wmlib/index" className="LogoIcon">
                   WMLIB 1.0
                </a>
              </li>
                    <li>

                        <NavLink to="/" >

                            <span className="sbNavText">Add Item</span>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/DeleteItem">

                            <span className="sbNavText">Delete Item</span>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/BorrowItem">

                            <span className="sbNavText">Borrow Item</span>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/ReturnItem">

                            <span className="sbNavText">Return Item</span>
                        </NavLink>
                    </li>

                    <li>

                        <NavLink to="/DisplayItem">

                            <span className="sbNavText">Display Item</span>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/GenerateReport">

                            <span className="sbNavText">Generate Report</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

        );
    }


}

export default withRouter(LeftNavigation)