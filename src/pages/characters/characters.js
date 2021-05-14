// import {connect} from 'react-redux';
import {getAll} from '../../firebase/database/chars'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';

// components 
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

// styling
import './characters.scss';

// redux
import {connect} from 'react-redux';
import {getChars} from '../../redux/reducers/characters';

const mapDispatchToProps = {getChars}

const mapStateToProps = state => ({
    chars: state.characters.characters
})

function Characters (props) {
    const placeholderImg = 'https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2027&q=80';
    const [uid, setUID] = useState(document.cookie.split(';')[0].split('=')[1]);
    const history = useHistory();


    const loadCharacters = async () => {
        let chars = await getAll(uid);
        props.getChars(chars); 
        console.log('chars', props.chars);

    }

    const handleAdd = () => {
        history.push('/chars/add')

    }

    const loadCharacterSheet = (char) => {
        console.log(char.firstName)
    }

    
    useEffect(loadCharacters,[]);


    return (
        <>
            <Header />
            <div id='addCharButton'><button onClick={handleAdd}>Add New Character</button></div>
            <div id='main'>
            {props.chars.map(char => {
                
                char.edit = false;
                return (
                <div onClick={() => loadCharacterSheet(char.charSheet)} className='card'>

                {/* conditionally render plain text vs input for edits using char.edit*/}
                {char.charSheet.img ?
                <img src={char.charSheet.img} style={{width:'100%',}} />
                : <img src={placeholderImg} style={{width:'100%',}}/>}
                <h3>{char.charSheet.firstName} {char.charSheet.lastName}</h3>
                </div>

            )})}
            </div>
            {/* <Footer/> */}
        </>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Characters);