import {connect} from 'react-redux';
import {Auth} from '../../firebase/firebase'
import { useEffect, useState } from 'react';
import editor from '../../editorjs/editor-config';

// styling
import './oneline-prompts.scss'

// redux states 
import {get} from '../../redux/reducers/oneliners';


const mapStateToProps = state => ({
    oneliners: state.oneliners.oneliners
})

const mapDispatchToProps = {get}

// functional component starts here 
function OnelinerPrompts (props) {
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
        <div id='oneline-prompts'>
            <h3>Quick Prompts:</h3>
            <button onClick={getRandomPrompt}>New Prompt</button>
            <textarea placeholder={`"${newPrompt}"`} rows='20' cols='30'/>
            
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(OnelinerPrompts);