import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Auth} from '../firebase/firebase';

function PrivateRoutes({component: Component, ...rest}) {
    const [cookies, setCookies] = useState(() => {
        if(document.cookie) {
            return document.cookie.split(';');
        } else {
            return '';
        }});
   
        const [authed, setAuthed] = useState(() => {
        if(cookies) {
            return parseInt(cookies[1].split('=')[1])
        } else {
            return 0;
        }
        });


    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /welcome page
        <Route {...rest} render={props => (
            authed ?
            <Component {...props} />
            : <Redirect to='/welcome' />
        )} />
    );
}

export default PrivateRoutes;