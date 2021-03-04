import {connect} from 'react-redux';
import {getAll} from '../../../firebase/database/chars'
import {useState, userEffect} from 'react'

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

    const loadCharacters = async () => {
        setChars(await getAll());
        console.log(chars);

    }
    
    useEffect(loadCharacters,[]);


    return (
        <>
            <Header />
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