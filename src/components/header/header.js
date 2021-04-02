import './header.scss'
import Nav from '../navigation/navigation'
import Siderbar from '../navigation/sidebar';

function Header () {

    return(
        <>
            <div className='header'>
                <h1>writrs.</h1>
                <div id='burger'>
                    <Siderbar/>
                </div>
            </div>
            <Nav />
        </>
    )
}

export default Header;