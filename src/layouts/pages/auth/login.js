import {useState} from 'react';
import {Auth} from '../../../firebase/firebase';
import validators from './validators';
import './login.scss';

function Login (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememeberMe, setRememberMe] = useState(false);

    const setRemember = () => {
        if(rememeberMe) {
            setRememberMe(false);
        } else {
            setRememberMe(true);
        }
    }


    
    const doLogin = (event) => {
        const email1 = email;
        const password1 = password;
        Auth.signInWithEmailAndPassword(email1, password1)
            .then(() => {
                setEmail(email1);
                setPassword(password1);
                alert('sign in successful')
            })
            .catch((error) => {
                console.log('email', email1)
                console.log('err', error);
                alert("Invalid login id or password.");
            });
        event.preventDefault();
    };



    return(
        <>
        <div className='container'>
            <h2>hello writr!</h2>
            <div className='login'>
                <form style={{marginTop: '50px'}}>
                    <label className='label'>Email:</label>
                    <input className='text' 
                        name='email' 
                        type='email'
                       placeholder='Email'
                       onChange={(e) => setEmail(e.target.value)}></input> {' '}
                    <label className='label'>Password:</label>
                    <input className='text' 
                        name='password' 
                        type='password'
                        placeholder='Password'
                        onChange={(e)=> setPassword(e.target.value)}></input>
                    <span>
                    <input onClick={setRemember} type='checkbox' id='remember'></input>
                    <label>Remember Me?</label>
                    </span> <br/>
                    <button onClick={doLogin}>sign in</button>
                </form>
            </div>
        </div>
        </>
    )
    
}

export default Login;