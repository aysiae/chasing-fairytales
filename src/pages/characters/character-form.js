import { useState } from 'react';
import {useHistory} from 'react-router-dom'
import Header from '../../components/header/header'
import {addCharacter} from '../../firebase/database/chars'
import { v4 as uuid } from 'uuid';
import './character-form.scss'

function CharacterForm(props) {
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
    const sexualPref = ['Select','Heterosexual','Bisexual','Homosexual','Pansexual','Asexual','Demisexual'];
    const romancePref = ['Select','Heteroromantic','Biromantic','Homoromantic','Panromantic','Aromantic','Demiromantic','Greyromantic'];

    const history = useHistory();
    
    // state 
    const [inRelationship, setInRelationship] = useState(false)
    const [img, setImg] = useState('');
    const [viewSections, setViewSections] = useState({
        basics: false,
        physical: false,
        personality: false,
        starSigns: false,
        family: false,
        love: false,
        supernatural: false,
        about: false,
        notes: false,

    })
    const [uploadImg, setUploadImg] = useState(false);
    

    // body
    const charSheet = {};
    const placeholderImg = 'https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2027&q=80';

    const handleInRelationship = (value) => {
        if(value !== 'Single') {
            setInRelationship(true);
        } else {
            setInRelationship(false);
        }
    }

    // handle toggle visibility of form sections 
    const handleIsVisible = (e) => {
        if(viewSections[e.target.name]) {
            setViewSections({...viewSections, [e.target.name]: false})
        } else {
            setViewSections({...viewSections, [e.target.name]: true})
        }
        console.log(viewSections[e.target.name])
    }

    // adds data to the character sheet form 'body' object 
    const handleBody = (e) => {
        charSheet[e.target.name] = e.target.value; 
    }

    // adds information to the database upon completion 
    const handleSubmit = async (e) => {
        e.preventDefault();
        charSheet['uuid'] = uuid(); // every character is given their own unique ID 
        addCharacter(charSheet);
        history.push('/chars') // after submission redirected to characters page 
    }

    const handleImgUpload = (e) => {
        if(uploadImg) {
            setUploadImg(false)
            handleSaveImg();
        } else {
            setUploadImg(true)
        }
    }

    const handleSaveImg = (e) => {
        setImg(charSheet.img);
    }

    return(
        <>
        <Header />
        <div id='form'>
            <div>
                <img src={img ? img : placeholderImg}></img>  
                <button onClick={handleImgUpload}>{uploadImg ? 'Save' : 'Add Image URL'}</button>
                {uploadImg ? 
                <input onChange={handleBody} type='text' name='img' placeholder={img ? img : 'Copy & Paste Image URL'}/>    
            : null}
            </div>
            <form>  
            <h3>Character Sheet:</h3>



                <fieldset onClick={handleIsVisible} name='basics'>
                    <h3 onClick={handleIsVisible} name='basics'>Basics</h3>
                    {viewSections.basics ? 
                    <div className='accordion'>
                        <p>* are required fields</p>
                        <label>Image URL</label>
                        <input onChange={handleBody} name='img' type='text'></input>
                        <label>First Name:*</label>
                        <input onChange={handleBody} name='firstName' type='text' required></input>
                        <label>Middle Name:</label>
                        <input onChange={handleBody} name='middleName' type='text'></input>
                        <label>Last Name:*</label>
                        <input onChange={handleBody} name='lastName' type='text' required></input>
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
                    </div>
                    : null }
                    </fieldset>



                    <fieldset onClick={handleIsVisible} name='physical'>
                        <h3>Physical Appearance</h3>
                        {viewSections.physical ? 
                        <div className='accordion'>
                            <label>Height:</label>
                            <input name='height' type='text'/>
                            <label>Weight:</label>
                            <input name='weight' type='text'/>
                            <label>Build:</label>
                            <input name='build' type='text'/>
                            <label>Eye Color:</label>
                            <input name='eyes' type='text'/>
                            <label>Hair Color:</label>
                            <input name='haircolor' type='text'/>
                            <label>Hair Style:</label>
                            <input name='hairstyle' type='text'/>
                            <label>Distinguishing Features:</label>
                            <input name='dist-features' type='text'/>
                            <label>Body Modifications:</label>
                            <input name='bodymods' type='text'/>
                        </div>
                        : null }
                    </fieldset>



                    <fieldset onClick={handleIsVisible} name='personality'>
                    <h3>Personality</h3>
                    {viewSections.personality ? 
                    <div className='accordion'>
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
                    </div>
                    : null }
                    </fieldset>



                    <fieldset onClick={handleIsVisible} name='starSigns'>
                    <h3>Star Signs</h3>
                    {viewSections.starSigns ?
                    <div className='accordion'>
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
                    </div>
                    : null }
                    </fieldset>



                    <fieldset name='family' onClick={handleIsVisible}>
                    <h3>Family & Heritage</h3>
                    {viewSections.family ?
                    <div className='accordion'>
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
                    </div>
                    : null }
                    </fieldset>



                    <fieldset name='love' onClick={handleIsVisible}>
                    <h3>Love & Romance</h3>
                    {viewSections.love ? 
                    <div className='accordion'>
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
                        <label>Sexual Orientation:</label>
                        <select onChange={handleBody} name='sexualPref'>
                        {sexualPref.map(type=> (
                            <option value={type}>{type}</option>
                        ))
                        }
                        </select>
                        <label>Romantic Orientation:</label>
                        <select onChange={handleBody} name='romancePref'>
                        {romancePref.map(type=> (
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
                    </div>
                    : null }
                    </fieldset>



                <fieldset name='supernatural' onClick={handleIsVisible}>
                 <h3>Supernatural</h3>
                 {viewSections.supernatural ? 
                 <div className='accordion'>
                    <label>Supernatural Type:</label>
                    <input onChange={handleBody} name='type' type='text'></input>
                    <label>Supernatural Species/Being Description:</label>
                    <input onChange={handleBody} name='superDesc' className='textArea' type='textarea'></input>
                    <label>Supernatural Origin:</label>
                    <input onChange={handleBody} name='superOrigin' className='textArea' type='textarea'></input>
                    <label>Supernatural Powers:</label>
                    <input onChange={handleBody} name='superPowers' className='textArea' type='textarea'></input>
                 </div>
                 : null }
                </fieldset>
                


                <fieldset name='about' onClick={handleIsVisible}>
                <h3>About:</h3>
                {viewSections.about ? 
                <div className='accordion'>
                    <label>Biography:</label>
                    <input onChange={handleBody} name='bio' className='textArea' type='textarea'></input>
                    <label>Hobbies:</label>
                    <input onChange={handleBody} name='hobbies' className='textArea' type='textarea'></input>
                    <label>Likes:</label>
                    <input onChange={handleBody} name='likes' className='textArea' type='textarea'></input>
                    <label>Dislikes:</label>
                    <input onChange={handleBody} name='dislikes' className='textArea' type='textarea'></input> 
                </div>
                : null }
                </fieldset>
                


                <fieldset name='notes' onClick={handleIsVisible}>
                <h3>Additional Notes:</h3>
                {viewSections.notes ? 
                <div className='accordion'>
                    <input onChange={handleBody} name='notes' className='textArea' type='textarea'></input>
                </div>
                : null }
                </fieldset>
                <button id='submit' onClick={handleSubmit}>Save</button>
            </form>
            
        </div>
        </>
    )
}

export default CharacterForm;