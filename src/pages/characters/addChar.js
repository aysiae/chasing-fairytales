import './addChar.scss';
import {connect} from 'react-redux';
import handleVisibility from '../../redux/reducers/characters';
// configs for EditorJS


const mapDispatchToProps = {handleVisibility}

const mapStateToProps = state => ({
    categories: state.categories.categories
})

function AddCharacter(props) {

    const handleTest = () => {
        console.log(props.categories);
    }


    return(
        <>
        <h3>Add Character</h3>
        <button onClick={handleTest}>test</button>
        {props.categories.map(item=> (<p>{item.name}</p>))}
        </>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(AddCharacter);