import './single-char.scss';
import Header from '../../components/header/header';
import {useLocation} from 'react-router-dom';

function SingleChar(props) {

    const handleClick = () => {
        console.log(props.location.state)
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

            </div>
        </div>
        
        
        </>
    )
}

export default SingleChar;