import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllRRComponent from './allrr.component';
import AllResRRComponent from './allresrr.component';
import AllEmpComponent from './allemp.component';
import NewEmployeeComponent from './newe.component';
import ManNavComponent from './mannav.component';

const MhomeComponent: React.FC = () => {

    return(
        // Manager Homepage
        <section id="homepage-manager">
          <div className="panel-title">Manager Options</div>
          <ManNavComponent></ManNavComponent>

          <Switch>
            <Route path="/manager/viewallrr" component={AllRRComponent}></Route>
            <Route path="/manager/viewallresrr" component={AllResRRComponent}></Route>
            <Route path="/manager/viewallemp" component={AllEmpComponent}></Route>
            <Route path="/manager/regnewemp" component={NewEmployeeComponent}></Route>
            {/* <Route path="/" component={LoginComponent}></Route> */}
          </Switch>

        </section>
    );
}

export default MhomeComponent;
