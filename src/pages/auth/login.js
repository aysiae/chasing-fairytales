import {useState} from 'react';
import {firebase, Auth} from '../../firebase/firebase';
import {useHistory} from 'react-router-dom';

// imports from other files
import './login.scss';
import validators from './validators';



function Login (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememeberMe, setRememberMe] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const history = useHistory();


    //TODO: get remember me session to persist
    const setRemember = () => {
        if(rememeberMe) {
            setRememberMe(false);
            console.log(rememeberMe)
        } else {
            setRememberMe(true);
            console.log(rememeberMe)
        }
    }

    const onFill = (e) => {
        if(e.target.name == 'email') {
            validators.email.valid = validators.email.rules[0].test.test(e.target.value);
            if(validators.email.valid) {
                setIsValid(true);
                setEmail(e.target.value)
            } else {
                setIsValid(false);
            }
        }
    }

    const isAuthenticated = async (remember) => {
        let current = null;
         await Auth.onAuthStateChanged(user => {
            if(user) {
                current = user;
                if(remember) {
                    console.log('inside set expiration')
                    document.cookie = `userID=${current.uid}; expires=Thu, 31 Dec 2099 23:59:59 GM`
                    document.cookie = `authed=1; expires=Thu, 31 Dec 2099 23:59:59 GM`
                } else {
                    console.log('inside session expiration')
                    document.cookie = `userID=${current.uid}`
                    document.cookie = `authed=1`
                }
            } else {
                document.cookie = `userID=null`
                document.cookie = `authed=0`
            }
        })
    }
  
    
    const doLogin = (event) => {
        const email1 = email;
        const password1 = password;
        event.preventDefault();
        Auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
            return Auth.signInWithEmailAndPassword(email1, password1)
            .then(() => {
                setEmail(email1);
                setPassword(password1);
                isAuthenticated(rememeberMe);
                history.push('/')
            })
            .catch((error) => {
                console.log('email', email1)
                console.log('err', error);
                alert("Invalid login id or password.");
            });
        }) 
    };



    return(
        <>
        <div className='login-container'>
            <h2>hello writr!</h2>
            <div className='login'>
                <form style={{marginTop: '50px'}}>
                    <label className='label'>Email:</label>
                    <input className='text' 
                        name='email' 
                        type='email'
                       placeholder='Email'
                       onBlur={onFill}></input> {' '}
                       {isValid ? null : <p>Please enter a valid email</p>}
                    <label className='label'>Password:</label>
                    <input className='text' 
                        name='password' 
                        type='password'
                        placeholder='Password'
                        onBlur={(e) => setPassword(e.target.value)}></input>
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