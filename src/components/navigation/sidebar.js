import './sidebar.scss';
import {Link} from 'react-router-dom';

function Sidebar() {
   
    return (
        <>
        <div id='sidebar'>
            <div>
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
        </>
    )
}


export default Sidebar;