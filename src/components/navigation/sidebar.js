import './sidebar.scss';
import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import {Auth} from '../../firebase/firebase';

import {update} from '../../redux/reducers/authenticated';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    currUser: state.currUser,
})

const mapDispatchToProps = {update}

function Sidebar(props) {
    const [isVisible,setIsVisible] = useState(false);
    const history = useHistory();

    //TODO: add <Link to='/'> all the buttons 

    const handleSignOut = async () => {
        Auth.signOut();
        document.cookie = 'authed=0'
        document.cookie = 'userID=null'
        history.push('/welcome');
    }


    return (
        <>
        {
        isVisible ?
        <div id='sidebar'>
            <div onClick={() => setIsVisible(false)}>
                <div className="outer">
                        <div className="inner">
                            <label>Back</label>
                        </div>
                    </div>
            </div>
                <div>
                    <p>PROFILE</p>
                    {/* <p>MESSAGES</p> */}
                    <p>ADD NEW CHARACTER</p>
                    <p>ADD NEW WORLD</p>
                    <p>ADD NEW UNIVERSE</p>
                    <p>WRITE NEW SCENE</p>
                    <p>WRITE NEW NOTE</p>
                </div>
                <div>
                    <p>ACCOUNT SETTINGS</p>
                    <p onClick={handleSignOut}>SIGN OUT</p>
                </div>
        </div>
        :
        <div id='hamburger' onClick={() => setIsVisible(true)}>
            <div></div>
            <div></div>
            <div></div>
        </div>
}
        </>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);