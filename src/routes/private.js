import { Route, Redirect } from 'react-router-dom';
import {Auth} from '../firebase/firebase';

function PrivateRoutes({component: Component, ...rest}) {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            Auth.currentUser ?
                <Component {...props} />
            : <Redirect to="/welcome" />
        )} />
    );
}

export default PrivateRoutes;