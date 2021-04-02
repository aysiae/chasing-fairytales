import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Auth} from '../firebase/firebase';

function PrivateRoutes({component: Component, auth, ...rest}) {
 
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /welcome page
        <Route {...rest} render={props => (
            auth ?
            <Component {...props} />
            : <Redirect to='/welcome' />
        )} />
    );
}

export default PrivateRoutes;