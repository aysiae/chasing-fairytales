import './header.scss'
import Nav from '../navigation/navigation'
// <a href="https://icons8.com/icon/O5eTS994oPEr/quill-pen">Quill Pen icon by Icons8</a>

function Header () {

    return(
        <>
            <div className='header typewriter'>
            <img style={{width:'96px', height:'96px', paddingTop: '60px'}}src="https://img.icons8.com/fluent-systems-filled/96/ffffff/quill-pen.png"/>
                <h1>writrs.</h1>
            </div>
            <Nav />
        </>
    )
}

export default Header;