import { useState } from 'react';
import './register.scss';


function Register() {
    // mutable state data 
    const [passwords, setPasswords] = useState({init: '', retype: '', match: true});
    
    // immutable data 
    const questions1 = [
        'What was the breed of your first dog?',
        'What is the title of your favorite movie?',
        'Who was your childhood hero?',
        'Where is your dream vacation location?',
        'What was the make and model of your first car?'
    ]

    const questions2 = [
        'What is your maternal grandma\'s maiden name?',
        'What was the title of your first job?',
        'What was the name of your first kiss?',
        'What year did your oldest cousin graduate highschool?',
        'What is the title of your favorite book?'

    ]

    const setPassword = (e) => {
        setPasswords({...passwords, [e.target.name]: e.target.value});
    }

    const checkPasswords = (e) => {
        if(passwords.init != passwords.retype) {
            setPasswords({...passwords, match: false})
        } else {
            setPasswords({...passwords, match: true})
        }
    }


    return (
        <>
        <div id='page'>
            <h2>become a writr.</h2>
            <div>
                <form>
                    <label>Email</label>
                    <input type='email'/>
                    <label>Password</label>
                    <input onBlur={checkPasswords} onChange={setPassword} name='init' type='password'/>
                    <label>Retype Password</label>
                    <input onBlur={checkPasswords} onChange={setPassword} name='retype' type='password'/>
                    {passwords.match ? null : <p style={{color:'red'}}>Passwords do not match!</p>}
                    <label> Username: </label>
                    <input type='text'/>
                    <label>Birthday</label>
                    <input type='date'/>
                    <label>Pick a Security Question (1)</label>
                    <select>
                        {questions1.map(q => (
                            <option>{q}</option>
                        ))}
                        
                    </select>
                    <label>Answer (is not case sensitive)</label>
                    <input type='text'/>
                    <label>Pick a Security Question (2)</label>
                    <select>
                    {questions2.map(q => (
                            <option>{q}</option>
                        ))}
                    </select>
                    <label>Answer (is not case sensitive)</label>
                    <input type='text'/>
                    <button>Start Writing</button>
                </form>

                <p>Development Note: this is  static page at the moment</p>
            </div>
        </div>
        </>
    )

}

export default Register;