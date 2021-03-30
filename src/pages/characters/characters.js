// import {connect} from 'react-redux';
import {getAll} from '../../firebase/database/chars'
import {Auth} from '../../firebase/firebase'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';

// components 
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

// styling
import './characters.scss';


function Characters (props) {
    const placeholderImg = 'https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2027&q=80';
    // do I want characters to be accessed globally? 
    const [chars, setChars] = useState([]);
    const history = useHistory();

    const loadCharacters = async () => {
        setChars(await getAll(Auth.currentUser.uid));
        console.log(chars);

    }

    const handleAdd = () => {
        history.push('/chars/add')

    }

    const handleEdit = () => {
        console.log('yeehaw')
    }

    
    useEffect(loadCharacters,[]);


    return (
        <>
            <Header />
            <div id='addCharButton'><button onClick={handleAdd}>Add New Character</button></div>
            <div id='main'>
            {chars.map(char => {
                
                char.edit = false;
                return (
                <div className='card'>

                {/* conditionally render plain text vs input for edits using char.edit*/}
                {char.charSheet.img ?
                <img src={char.charSheet.img} style={{width:'100%',}} />
                : <img src={placeholderImg} style={{width:'100%',}}/>}
                <h3>{char.charSheet.firstName} {char.charSheet.lastName}</h3>
                    <div className='container'>
                        <div id='char-info'>
                            {/* conditional rendering */}
                            {char.charSheet.middleName ?
                            <span className='char-sheet'>
                                <p>Full Name:</p>
                                <p>{char.charSheet.firstName} {char.charSheet.middleName} {char.charSheet.lastName}</p>
                            </span>
                            
                            :null}

            
                            {char.charSheet.nicknames ? 
                            <span className='char-sheet'>
                                <p>Nicknames: </p>
                                <p>{char.charSheet.nicknames}</p>
                            </span>
                            : null }

                            {char.charSheet.birthday ?
                            <span className='char-sheet'>
                                <p>Birthday: </p>
                                <p>{char.charSheet.birthday}</p>
                            </span>
                            : null }

                            {char.charSheet.birthplace ?
                            <span className='char-sheet'>
                                <p>Birthplace: </p>
                                <p>{char.charSheet.birthplace}</p>
                            </span>
                            : null }

                            {char.charSheet.age ?
                            <span className='char-sheet'>
                                <p>Age: </p>
                                <p>{char.charSheet.age}</p>
                            </span>
                            : null }    
                        
                        
                            {char.charSheet.gender ?
                            <span className='char-sheet'>
                                <p>Gender: </p>
                                <p>{char.charSheet.gender}</p>
                            </span>
                            : null } 

                            {char.charSheet.occupation ?
                            <span className='char-sheet'>
                                <p>Occupation: </p>
                                <p>{char.charSheet.occupation}</p>
                            </span>
                             : null } 
                        </div>
                        <button onClick={handleEdit}>Edit</button>
                       
                        
                    </div>
                </div>

            )})}
            </div>
            <Footer />
        </>
    )
}

export default Characters;