import {connect} from 'react-redux';
import {Auth} from '../../../firebase/firebase'


// components 
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

// styling
import './home.scss'


const mapStateToProps = state => ({
    characters: state.characters.chars,
})

function Home (props) {


    return (
        <>
            <Header />
            <main className='main'>
                <p>HI</p>
            </main>
            <Footer />
        </>
    )
}

export default connect(mapStateToProps)(Home);