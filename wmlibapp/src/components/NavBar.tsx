import * as React from 'react';


class NavBar extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
       
    }
    
    
    render() {
        return(
        <div className="NavBar">
          
            <div className="ms-Grid">
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm6 logo-section">
                    <span className="App-title"> Westminster Library Manager</span>
                </div>
               
              </div>
            </div>
        </div>
        )
    }
}

export default NavBar