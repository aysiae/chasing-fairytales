import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Auth} from '../firebase/firebase';

function PrivateRoutes({component: Component, ...rest}) {

    const isLogin = async () => {
        return await Auth.onAuthStateChanged(user => {
            if(user) {
                return user;
            } else {
                return null;
            }
        })
    }

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /welcome page
        <Route {...rest} render={props => (
            isLogin() ?
            <Component {...props} />
            : <Redirect to='/welcome' />
        )} />
    );
}

export default PrivateRoutes;