import { useState } from 'react';
import './register.scss';


function Register() {
    const [passwords, setPasswords] = useState({init: '', retype: '', match: true})


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
                    <input onChange={setPassword} name='init' type='password'/>
                    <label>Retype Password</label>
                    <input onBlur={checkPasswords} onChange={setPassword} name='retype' type='password'/>
                    {passwords.match ? null : <p style={{color:'red'}}>Passwords do not match!</p>}
                    <label> Username: </label>
                    <input type='text'/>
                    <label>Birthday</label>
                    <input type='date'/>
                    <label>Pick a Security Question (1):</label>
                    <select>
                        <option></option>
                    </select>
                    <label>Answer:</label>
                    <input type='text'/>
                    <label>Pick a Security Question (2):</label>
                    <select>
                        <option></option>
                    </select>
                    <label>Answer:</label>
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