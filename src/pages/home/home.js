import {connect} from 'react-redux';
import {Auth} from '../../firebase/firebase'
import { useEffect, useState } from 'react';

// components 
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import OnelinerPrompts from '../../components/oneliners/oneline-prompts';


// styling
import './home.scss'

// redux states 
import {get} from '../../redux/reducers/oneliners';
import {getChars} from '../../redux/reducers/characters';
import {getAll} from '../../firebase/database/chars'

const mapStateToProps = state => ({
    oneliners: state.oneliners.oneliners,
    chars: state.characters.characters
})

const mapDispatchToProps = {get, getChars}

// functional component starts here 
function Home (props) {
    const placeholderImg = 'https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2027&q=80';
    const [uid, setUID] = useState(document.cookie.split(';')[0].split('=')[1]);

    const toggle = () => {
        console.log(props.chars)
    }

    const loadCharacters = async () => {
        let chars = await getAll(uid);
        props.getChars(chars); 
        console.log('chars', props.chars);

    }

    useEffect(loadCharacters,[])
    


    return (
        <>
            <Header />
            <main className='home-dash'>
                <OnelinerPrompts/>
                <div id='home-chars'>
                    <h3>Quick Characters</h3>
                    <div>
                        {props.chars.map((char, idx) => {
                            
                            if(idx <= 8) {
                                return (
                                    <span className='char-preview'>
                                        <img src={char.charSheet.img ? char.charSheet.img : placeholderImg}/>
                                        <h4>{char.charSheet.firstName}</h4>
                                    </span>
                                )
                            }
                            })}
                    </div>
                </div>
                <div id='home-universe'>
                    <h3>Quick Notes:</h3>
                    <div>
                        <span>
                            <h4>Title</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim tellus, aliquam quis pharetra placerat, laoreet ut eros. Quisque eget velit quis neque cursus faucibus dignissim vitae sapien. Aenean mi augue, posuere ut venenatis at, fermentum vitae turpis. Mauris tempor enim orci, ac cursus libero commodo in. Nullam vehicula risus.</p>
                        </span>
                        <span>
                            <h4>Title</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim tellus, aliquam quis pharetra placerat, laoreet ut eros. Quisque eget velit quis neque cursus faucibus dignissim vitae sapien. Aenean mi augue, posuere ut venenatis at, fermentum vitae turpis. Mauris tempor enim orci, ac cursus libero commodo in. Nullam vehicula risus.</p>
                        </span>
                    </div>
                    
                </div>
            </main>
            <Footer />
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);