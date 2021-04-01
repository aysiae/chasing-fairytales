import './sidebar.scss';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function Sidebar() {
    const [isVisible,setIsVisible] = useState(false);


    return (
        <>
        {
        isVisible ?
        <div id='sidebar'>
            <div onClick={() => setIsVisible(false)}>
                <div class="outer">
                        <div class="inner">
                            <label>Back</label>
                        </div>
                    </div>
            </div>
                <div>
                    <p>PROFILE</p>
                    <p>MESSAGES</p>
                    <p>ADD NEW CHARACTER</p>
                    <p>ADD NEW WORLD</p>
                    <p>ADD NEW UNIVERSE</p>
                    <p>WRITE NEW SCENE</p>
                    <p>WRITE NEW NOTE</p>
                </div>
                <div>
                    <p>ACCOUNT SETTINGS</p>
                    <p>SIGN OUT</p>
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


export default Sidebar;