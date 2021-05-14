import './single-char.scss';
import Header from '../../components/header/header';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';

function SingleChar(props) {
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        if(edit) {
            setEdit(false);
        } else {
            setEdit(true);
        }
    }

    return (
        <>
        <Header/>
        <div id='charSheet'>
            <div>
                <h3>{props.location.state.char.firstName} {props.location.state.char.middleName} {props.location.state.char.lastName}</h3>
                <img src={props.location.state.char.img}/>
            </div>
            
            <div id='info'>
                {edit ? 
                <p>hello</p>
            : <p>goodbye</p>}
            </div>

        </div>
        
        
        </>
    )
}

export default SingleChar;