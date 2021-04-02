import {useState} from 'react';
import {firebase, Auth} from '../../firebase/firebase';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

// imports from other files
import './login.scss';
import {update} from '../../redux/reducers/authenticated';

const mapDispatchToProps = {update};

const mapStateToProps = state => ({
    currUser: state.currUser
})


function Login (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememeberMe, setRememberMe] = useState(false);

    const history = useHistory();


    //TODO: get remember me session to persist
    const setRemember = () => {
        if(rememeberMe) {
            setRememberMe(false);
        } else {
            setRememberMe(true);
        }
    }

    const isAuthenticated = async () => {
        let current = null;
         await Auth.onAuthStateChanged(user => {
            if(user) {
                current = user;
                props.update({currUser:true, uid: current.uid})
            } else {
                current = false;
                props.update({currUser: false, uid: null})
            }
        })
        console.log('props', props.currUser);
        return current;
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);