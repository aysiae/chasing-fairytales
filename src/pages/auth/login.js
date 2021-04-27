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
        } else {
            setRememberMe(true);
        }
    }

    const onFill = (e) => {
        console.log('inside onFill')
        if(e.target.name == 'email') {
            validators.email.valid = validators.email.rules[0].test.test(e.target.value);
            if(validators.email.valid) {
                setIsValid(true);
                setEmail(e.target.value)
            } else {
                setIsValid(false);
                // alert(validators.email.rules[0].message);
            }
        }
    }

    const isAuthenticated = async () => {
        let current = null;
         await Auth.onAuthStateChanged(user => {
            if(user) {
                current = user;
                document.cookie = `userID=${current.uid}; expires=Thu, 31 Dec 2099 23:59:59 GM`
                document.cookie = `authed=true; expires=Thu, 31 Dec 2099 23:59:59 GM`
            } else {
                document.cookie = `userID=null`
                document.cookie = `authed=false`
            }
        })
    }


    // TODO: add validators    
    
    const doLogin = (event) => {
        const email1 = email;
        const password1 = password;
        if(rememeberMe) {
            Auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                return Auth.signInWithEmailAndPassword(email1, password1)
                .then(() => {
                    setEmail(email1);
                    setPassword(password1);
                    isAuthenticated();
                    history.push('/')
                })
                .catch((error) => {
                    console.log('email', email1)
                    console.log('err', error);
                    alert("Invalid login id or password.");
                });
            }) 
        } else {
            Auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                return Auth.signInWithEmailAndPassword(email1, password1)
                .then(() => {
                    setEmail(email1);
                    setPassword(password1);
                    isAuthenticated();
                    history.push('/')
                })
                .catch((error) => {
                    console.log('email', email1)
                    console.log('err', error);
                    alert("Invalid login id or password.");
                });
            })
        }

        event.preventDefault();
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