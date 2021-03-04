import { useState } from 'react';
import {Auth, database} from '../../../firebase/firebase'
import Header from '../../components/header/header'
import {addCharacter} from '../../../firebase/database/chars'
import './character-form.scss'

function CharacterForm() {
    // immutable data
    const starSigns = ['Select','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagitarius','Capricorn','Aquarius','Pisces'];
    const mbti = ['Select', 'INTJ - The Architect', 'INTP - The Logician', 'ENTJ - The Commander', 'ENTP - The Debater',
    'INFJ - The Advocate', 'INFP - The Mediator', 'ENFJ - The Protagonist', 'ENFP - The Campaigner',
    'ISTJ - The Logistician', 'ISFJ - The Defender', 'ESTJ - The Executive', 'ESFJ - The Consul',
    'ISTP - The Virtuoso', 'ISFP - The Adventurer', 'ESTP - The Entrepreneur', 'ESFP - The Entertainer']
    const morals = ['Select', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Good', 'True Good', 'Chaotic Good','Lawful Evil', 'True Evil','Chaotic Evil'];
    const loveType = ['Select', 'Philia','Pragma','Storge','Ludus','Eros','Mania','Philautia','Agape'];
    const loveLang = ['Select','Words of Affirmation', 'Physical Touch','Quality Time','Recieving Gifts','Acts of Service'];
    const relationship = ['Single','In Relationship','Married','It\'s complicated'];
    const gender = ['Select','Male', 'Female','Non-Binary']
    
    // state 
    const [inRelationship, setInRelationship] = useState(false)
    const [isSuper, setIsSuper] = useState(false);
    

    // body
    const charSheet = {};

    const handleInRelationship = (value) => {
        if(value !== 'Single') {
            setInRelationship(true);
        } else {
            setInRelationship(false);
        }
    }

    const handleIsSuper = (value) => {
        if(value === 'Yes') {
            setIsSuper(true);
        } else {
            setIsSuper(false);
        }
    }

    const handleBody = (e) => {
        charSheet[e.target.name] = e.target.value; 
    }


    // handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        addCharacter(charSheet);
    }



    return(
        <>
        <Header />
        <div id='form'>
            <form>
                <fieldset>
                    <h2>Character Sheet:</h2>
                    <h3>Basics</h3>
                    <label>Image URL</label>
                    <input onChange={handleBody} name='img' type='text'></input>
                    <label>First Name:</label>
                    <input onChange={handleBody} name='firstName' type='text'></input>
                    <label>Middle Name:</label>
                    <input onChange={handleBody} name='middleName' type='text'></input>
                    <label>Last Name:</label>
                    <input onChange={handleBody} name='lastName' type='text'></input>
                    <label>Nicknames:</label>
                    <input onChange={handleBody} name='nicknames' type='text'></input>
                    <label>Birthday</label>
                    <input onChange={handleBody} name='birthday' type='date'></input>
                    <label>Birthplace:</label>
                    <input onChange={handleBody} name='birthplace' type='text'></input>
                    <label>Age</label>
                    <input onChange={handleBody} name='age' type='number' min='1'></input>
                    <label>Gender:</label>
                        <select onChange={handleBody} name='gender'>
                            {gender.map(sex=>(
                            <option value={sex}>{sex}</option>
                            ))}
                        </select>
                    <label>Occupation</label>
                    <input onChange={handleBody} name='occupation' type='text'></input>
                    <label>Is supernatural?</label>
                    <select onChange={handleBody} name='super' onChange={(e) => handleIsSuper(e.target.value)}>
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </select>
                    
                    <h3>Personality</h3>
                    <label>Moral Alignment:</label>
                    <select onChange={handleBody} name='moralAlign'> 
                        {morals.map(type=> (
                            <option value={type}>{type}</option>
                        ))}
                    </select>
                    <label>MBTI:</label>
                    <select onChange={handleBody} name='mbti'> 
                        {mbti.map(type => (
                            <option value={type}>{type}</option>
                        ))}
                    </select>
                    <label>Values:</label>
                    <input onChange={handleBody} name='values' className='textArea' type='textarea'></input>
                    <label>Positive Traits (strengths):</label>
                    <input onChange={handleBody} name='strengths' className='textArea' type='textarea'></input>
                    <label>Negative Traits (flaws):</label>
                    <input onChange={handleBody} name='flaws' className='textArea' type='textarea'></input>

                    <h3>Star Signs</h3>
                    <label>Sun</label>
                    <select onChange={handleBody} name='sunSign'>
                        {starSigns.map(sign =>(
                            <option value={sign}>{sign}</option>
                        ))}
                    </select>
                    <label>Moon</label>
                    <select onChange={handleBody} name='moonSign'>
                        {starSigns.map(sign =>(
                            <option value={sign}>{sign}</option>
                        ))}
                    </select>
                    <label>Rising</label>
                    <select onChange={handleBody} name='risingSign'>
                        {starSigns.map(sign =>(
                            <option value={sign}>{sign}</option>
                        ))}
                    </select>

                    <h3>Family & Heritage</h3>
                    <label>Ethnicity:</label>
                    <input onChange={handleBody} name='ethnicity' type='text'></input>
                    <label>Family Legacy:</label>
                    <input onChange={handleBody} name='legacy' type='text'></input>
                    <label>Generation:</label>
                    <input onChange={handleBody} name='generation' type='text'></input>
                    <label>Spoken Languages</label>
                    <input onChange={handleBody} name='languages' type='text'></input>
                    <label>Mother:</label>
                    <input onChange={handleBody} name='mother' type='text'></input>
                    <label>Father:</label>
                    <input onChange={handleBody} name='father' type='text'></input>
                    <label>Siblings:</label>
                    <input onChange={handleBody} name='siblings' type='text'></input>
                    <label>Children:</label>
                    <input onChange={handleBody} name='kids' type='text'></input>

                    <h3>Love & Romance</h3>
                    <label>Love Type:</label>
                    <select onChange={handleBody} name='loveType'>
                        {loveType.map(type => (
                            <option value={type}>{type}</option>
                        ))}
                    </select>
                    <label>Love Language:</label>
                    <select onChange={handleBody} name='loveLang'>
                    {loveLang.map(type=> (
                        <option value={type}>{type}</option>
                    ))
                    }
                    </select>
                    <label>Relationship Status:</label>
                    <select onChange={handleBody} name='relationshipStatus' onChange={(e) => handleInRelationship(e.target.value)}>
                        {relationship.map(status => (
                            <option value={status}>{status}</option>
                        ))}
                    </select>
                    {inRelationship ? 
                    <>
                    <label>With:</label>
                    <input onChange={handleBody} name='shippedWithWho' type='text'></input>
                    </>
                : null}

                { isSuper ?
                <>
                 <h3>Supernatural</h3>
                <label>Supernatural Type:</label>
                <input onChange={handleBody} name='type' type='text'></input>
                <label>Supernatural Species/Being Description:</label>
                <input onChange={handleBody} name='superDesc' className='textArea' type='textarea'></input>
                <label>Supernatural Origin:</label>
                <input onChange={handleBody} name='superOrigin' className='textArea' type='textarea'></input>
                <label>Supernatural Powers:</label>
                <input onChange={handleBody} name='superPowers' className='textArea' type='textarea'></input>
                </>
                : null
                }

                <h3>About:</h3>
                <label>Biography:</label>
                <input onChange={handleBody} name='bio' className='textArea' type='textarea'></input>
                <label>Hobbies:</label>
                <input onChange={handleBody} name='hobbies' className='textArea' type='textarea'></input>
                <label>Likes:</label>
                <input onChange={handleBody} name='likes' className='textArea' type='textarea'></input>
                <label>Dislikes:</label>
                <input onChange={handleBody} name='dislikes' className='textArea' type='textarea'></input> 

                
                <h3>Additional Notes:</h3>
                <input onChange={handleBody} name='notes' className='textArea' type='textarea'></input>
                <button id='submit' onClick={handleSubmit}>Submit</button>
                </fieldset>
            </form>
            
        </div>
        </>
    )
}

export default CharacterForm;