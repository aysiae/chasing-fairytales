import {connect} from 'react-redux';
import {getAll} from '../../../firebase/database/chars'
import {Auth} from '../../../firebase/firebase'
import {useState, userEffect} from 'react'
import {useHistory} from 'react-router-dom';

// components 
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

// styling
import './characters.scss'
import { useEffect } from 'react';


const mapStateToProps = state => ({
    characters: state.characters.chars,
})

function Characters (props) {
    const [chars, setChars] = useState([]);
    const history = useHistory();

    const loadCharacters = async () => {
        setChars(await getAll(Auth.currentUser.uid));
        console.log(chars);

    }

    const handleAdd = () => {
        history.push('/chars/add')

    }
    
    useEffect(loadCharacters,[]);


    return (
        <>
            <Header />
            <button onClick={handleAdd}>Add New Character</button>
            <div id='main'>
            {chars.map(char => (
                <div className='card'>
                <img onClick={loadCharacters} src={char.charSheet.img} style={{width:'100%',}} />
                    <div className='container'>
                        <p>{char.charSheet.firstName} {char.charSheet.middleName} {char.charSheet.lastName}</p>
                    </div>
                </div>

            ))}
            </div>
            <Footer />
        </>
    )
}

export default connect(mapStateToProps)(Characters);