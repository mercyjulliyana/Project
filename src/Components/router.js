import { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import PersonalDetails from './PersonalDetails';
import CompanyDetails from './CompanyDetails';
import EmailVerification from './EmailVerification';

class Routers extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path='/' exact component={PersonalDetails} />
                        <Route path='/CompanyDetails' component={CompanyDetails} />
                        <Route path='/EmailVerification' component={EmailVerification} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Routers;


