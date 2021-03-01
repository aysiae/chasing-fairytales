import {connect} from 'react-redux';


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
            <div id='main'>
            {props.characters.map(char => (
                <div className='card'>
                <img src={char.img} style={{width:'100%',}} />
                    <div className='container'>
                        <p>{char.name.first} {char.name.middle} {char.name.last}</p>
                    </div>
                </div>

            ))}
            </div>
            <Footer />
        </>
    )
}

export default connect(mapStateToProps)(Home);