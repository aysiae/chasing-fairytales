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
                    <p>Profile</p>
                    <p>Messages</p>
                    <p>Add New Character</p>
                    <p>Add New World</p>
                    <p>Write New Scene</p>
                    <p>Write New Note</p>
                </div>
                <div>
                    <p>Account Settings</p>
                    <p>Sign Out</p>
                </div>
        </div>
        </>
    )
}


export default Sidebar;