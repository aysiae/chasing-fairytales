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
                    <h3>Basics</h3>
                    <label>Image URL</label>
                    <input type='text'></input>
                    <label>First Name:</label>
                    <input type='text'></input>
                    <label>Middle Name:</label>
                    <input type='text'></input>
                    <label>Last Name:</label>
                    <input type='text'></input>
                    <label>Nickname</label>
                    <input type='text'></input>
                    <label>Birthday</label>
                    <input type='date'></input>
                    <label>Birthplace:</label>
                    <input type='text'></input>
                    <label>Age</label>
                    <input type='number' min='1'></input>
                    <label>Gender:</label>
                        <select>
                            {gender.map(sex=>(
                            <option value={sex}>{sex}</option>
                            ))}
                        </select>
                    <label>Occupation</label>
                    <input type='text'></input>
                    
                    <h3>Personality</h3>
                    <label>Moral Alignment:</label>
                    <select>
                        {morals.map(type=> (
                            <option value={type}>{type}</option>
                        ))}
                    </select>
                    <label>MBTI:</label>
                    <select>
                        {mbti.map(type => (
                            <option value={type}>{type}</option>
                        ))}
                    </select>
                    <label>Values:</label>
                    <input type='textarea'></input>
                    <label>Positive Traits:</label>
                    <input type='textarea'></input>
                    <label>Negative Traits:</label>
                    <input type='textarea'></input>

                    <h3>Star Signs</h3>
                    <label>Sun</label>
                    <select>
                        {starSigns.map(sign =>(
                            <option value={sign}>{sign}</option>
                        ))}
                    </select>
                    <label>Moon</label>
                    <select>
                        {starSigns.map(sign =>(
                            <option value={sign}>{sign}</option>
                        ))}
                    </select>
                    <label>Rising</label>
                    <select>
                        {starSigns.map(sign =>(
                            <option value={sign}>{sign}</option>
                        ))}
                    </select>

                    <h3>Family & Heritage</h3>
                    <label>Ethnicity:</label>
                    <input type='text'></input>
                    <label>Family Legacy:</label>
                    <input type='text'></input>
                    <label>Generation:</label>
                    <input type='text'></input>
                    <label>Spoken Languages</label>
                    <input type='text'></input>
                    <label>Mother:</label>
                    <input type='text'></input>
                    <label>Father:</label>
                    <input type='text'></input>
                    <label>Siblings:</label>
                    <input type='text'></input>
                    <label>Children:</label>
                    <input type='text'></input>

                    <h3>Love & Romance</h3>
                    <label>Love Type:</label>
                    <select>
                        {loveType.map(type => (
                            <option value={type}>{type}</option>
                        ))}
                    </select>
                    <label>Love Languages (limit 2):</label>
                    {loveLang.map(type=> (
                        <span>
                        <input type='checkbox' value={type}/>
                        <label>{type}</label>
                        </span>
                    ))
                    }
                    <label>Relationship Status:</label>
                    <select onChange={(e) => handleInRelationship(e.target.value)}>
                        {relationship.map(status => (
                            <option value={status}>{status}</option>
                        ))}
                    </select>
                    {inRelationship ? 
                    <>
                    <label>With:</label>
                    <input type='text'></input>
                    </>
                : null}

                <h3>Supernatural</h3>
                <label>Is supernatural?</label>
                <select onChange={(e) => handleIsSuper(e.target.value)}>
                    <option value='No'>No</option>
                    <option value='Yes'>Yes</option>
                </select>
                { isSuper ?
                <>
                <label>Supernatural Type:</label>
                <input type='text'></input>
                <label>Supernatural Species/Being Description:</label>
                <input type='textarea'></input>
                <label>Supernatural Powers:</label>
                <input type='textarea'></input>
                </>
                : null
                }

                <h3>Biography:</h3>
                <input type='textarea'></input>
                
                <h3>Additional Notes:</h3>
                <input type='textarea'></input>
                </fieldset>
            </form>
            
        </div>
        </>
    )
}

export default CharacterForm;