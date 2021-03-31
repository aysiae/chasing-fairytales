import {connect} from 'react-redux';
import {Auth} from '../../firebase/firebase'


// components 
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

// styling
import './home.scss'


function Home (props) {

    return (
        <>
            <Header />
            <main className='home-dash'>
                <div id='home-prompts'>

                    
                </div>
                <div id='home-chars'>

                </div>
                <div id='home-universe'>

                    
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home;