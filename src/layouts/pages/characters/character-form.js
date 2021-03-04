import { useState } from 'react';
import Header from '../../components/header/header'
import './character-form.scss'

function CharacterForm() {
    // immutable data
    const starSigns = ['None','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagitarius','Capricorn','Aquarius','Pisces'];
    const mbti = ['None', 'INTJ - The Architect', 'INTP - The Logician', 'ENTJ - The Commander', 'ENTP - The Debater',
    'INFJ - The Advocate', 'INFP - The Mediator', 'ENFJ - The Protagonist', 'ENFP - The Campaigner',
    'ISTJ - The Logistician', 'ISFJ - The Defender', 'ESTJ - The Executive', 'ESFJ - The Consul',
    'ISTP - The Virtuoso', 'ISFP - The Adventurer', 'ESTP - The Entrepreneur', 'ESFP - The Entertainer']
    const morals = ['None', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Good', 'True Good', 'Chaotic Good','Lawful Evil', 'True Evil','Chaotic Evil'];
    const loveType = ['None', 'Philia','Pragma','Storge','Ludus','Eros','Mania','Philautia','Agape'];
    const loveLang = ['None','Words of Affirmation', 'Physical Touch','Quality Time','Recieving Gifts','Acts of Service'];
    const relationship = ['Single','In Relationship','Married','It\'s complicated'];
    const gender = ['male', 'female','non-binary']
    // state 
    const [inRelationship, setInRelationship] = useState(false)
    const [isSuper, setIsSuper] = useState(false);

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


    return(
        <>
        <Header />
        <div id='form'>
            <form>
                <fieldset>
                    <h2>Character Sheet:</h2>
                    <h3>Basics</h3>
                    <label>Image URL</label>
                    <input name='url' type='text'></input>
                    <label>First Name:</label>
                    <input name='firstName' type='text'></input>
                    <label>Middle Name:</label>
                    <input name='middleName' type='text'></input>
                    <label>Last Name:</label>
                    <input name='lastName' type='text'></input>
                    <label>Nicknames:</label>
                    <input name='nicknames' type='text'></input>
                    <label>Birthday</label>
                    <input name='birthday' type='date'></input>
                    <label>Birthplace:</label>
                    <input name='birthplace' type='text'></input>
                    <label>Age</label>
                    <input name='age' type='number' min='1'></input>
                    <label>Gender:</label>
                        <select name='gender'>
                            {gender.map(sex=>(
                            <option value={sex}>{sex}</option>
                            ))}
                        </select>
                    <label>Occupation</label>
                    <input name='occupation' type='text'></input>
                    
                    <h3>Personality</h3>
                    <label>Moral Alignment:</label>
                    <select name='moralAlign'> 
                        {morals.map(type=> (
                            <option value={type}>{type}</option>
                        ))}
                    </select>
                    <label>MBTI:</label>
                    <select name='mbti'> 
                        {mbti.map(type => (
                            <option value={type}>{type}</option>
                        ))}
                    </select>
                    <label>Values:</label>
                    <input name='values' className='textArea' type='textarea'></input>
                    <label>Positive Traits (strengths):</label>
                    <input name='strengths' className='textArea' type='textarea'></input>
                    <label>Negative Traits (flaws):</label>
                    <input name='flaws' className='textArea' type='textarea'></input>

                    <h3>Star Signs</h3>
                    <label>Sun</label>
                    <select name='sunSign'>
                        {starSigns.map(sign =>(
                            <option value={sign}>{sign}</option>
                        ))}
                    </select>
                    <label>Moon</label>
                    <select name='moonSign'>
                        {starSigns.map(sign =>(
                            <option value={sign}>{sign}</option>
                        ))}
                    </select>
                    <label>Rising</label>
                    <select name='risingSign'>
                        {starSigns.map(sign =>(
                            <option value={sign}>{sign}</option>
                        ))}
                    </select>

                    <h3>Family & Heritage</h3>
                    <label>Ethnicity:</label>
                    <input name='ethnicity' type='text'></input>
                    <label>Family Legacy:</label>
                    <input name='legacy' type='text'></input>
                    <label>Generation:</label>
                    <input name='generation' type='text'></input>
                    <label>Spoken Languages</label>
                    <input name='languages' type='text'></input>
                    <label>Mother:</label>
                    <input name='mother' type='text'></input>
                    <label>Father:</label>
                    <input name='father' type='text'></input>
                    <label>Siblings:</label>
                    <input name='siblings' type='text'></input>
                    <label>Children:</label>
                    <input name='kids' type='text'></input>

                    <h3>Love & Romance</h3>
                    <label>Love Type:</label>
                    <select name='loveType'>
                        {loveType.map(type => (
                            <option value={type}>{type}</option>
                        ))}
                    </select>
                    <label>Love Languages (limit 2):</label>
                    {loveLang.map(type=> (
                        <span>
                        <input name='loveLang' type='checkbox' value={type}/>
                        <label>{type}</label>
                        </span>
                    ))
                    }
                    <label>Relationship Status:</label>
                    <select name='relationshipStatus' onChange={(e) => handleInRelationship(e.target.value)}>
                        {relationship.map(status => (
                            <option value={status}>{status}</option>
                        ))}
                    </select>
                    {inRelationship ? 
                    <>
                    <label>With:</label>
                    <input name='shipWho' type='text'></input>
                    </>
                : null}

                <h3>Supernatural</h3>
                <label>Is supernatural?</label>
                <select name='super' onChange={(e) => handleIsSuper(e.target.value)}>
                    <option value='No'>No</option>
                    <option value='Yes'>Yes</option>
                </select>
                { isSuper ?
                <>
                <label>Supernatural Type:</label>
                <input name='type' type='text'></input>
                <label>Supernatural Species/Being Description:</label>
                <input name='superDesc' className='textArea' type='textarea'></input>
                <label>Supernatural Powers:</label>
                <input name='superPowers' className='textArea' type='textarea'></input>
                </>
                : null
                }

                <h3>Biography:</h3>
                <input name='bio' className='textArea' type='textarea'></input>
                
                <h3>Additional Notes:</h3>
                <input name='notes' className='textArea' type='textarea'></input>
                <button id='submit'>Submit</button>
                </fieldset>
            </form>
            
        </div>
        </>
    )
}

export default CharacterForm;