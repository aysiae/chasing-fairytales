import './splash.scss'
import Footer from '../../components/footer/footer.js'

import {Link} from 'react-router-dom';

function Splash () {
    return(
        <>
            <div id='splash'>
                <div>
                    <h1>hello, writr.</h1>
                    <h3>Your imagination awaits you.</h3>
                    <span>
                    <Link to='/login'>
                        <button>Login</button> 
                    </Link>
                    {/* add link to Register once page is made */}
                    <button>Register</button>
                    </span>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Splash;