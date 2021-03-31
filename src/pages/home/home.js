import {connect} from 'react-redux';
import {Auth} from '../../firebase/firebase'
import { useEffect, useState } from 'react';

// components 
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

// styling
import './home.scss'

// redux states 
import {get} from '../../redux/reducers/oneliners';


const mapStateToProps = state => ({
    oneliners: state.oneliners.oneliners
})

const mapDispatchToProps = {get}

// functional component starts here 
function Home (props) {
    const [newPrompt, setNewPrompt] = useState('Why are you looking at me like that?');

    const getPrompts = () => {
        props.get();
    }

    useEffect(getPrompts, []);

    const getRandomPrompt = () => {
        let idx = Math.floor(Math.random() * (props.oneliners.length));
        setNewPrompt(props.oneliners[idx].prompt);
        console.log('new', newPrompt);
    }


    return (
        <>
            <Header />
            <main className='home-dash'>
                <div id='home-prompts'>
                    <h3>Quick Prompts:</h3>
                    <textarea placeholder={`"${newPrompt}"`} rows='20' cols='30'/>
                    <button onClick={getRandomPrompt}>New Prompt</button>
                    
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);