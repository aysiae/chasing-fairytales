import './sidebar.scss';
import {Link} from 'react-router-dom';

function Sidebar() {
   
    return (
        <>
        <div id='sidebar'>
        <ul>
            <li>Profile</li>
            <li>Messages</li>
            <li>Add New Character</li>
            <li>Add New World</li>
            <li>Write New Scene</li>
            <li>Write New Note</li>
        </ul>
        <ul>
            <li>Account Settings</li>
            <li>Sign Out</li>
        </ul>
        </div>
        </>
    )
}


export default Sidebar;