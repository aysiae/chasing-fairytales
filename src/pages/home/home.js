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


const mapStateToProps = state => ({
    oneliners: state.oneliners.oneliners
})

const mapDispatchToProps = {get}

// functional component starts here 
function Home (props) {


    return (
        <>
            <Header />
            <main className='home-dash'>
                <OnelinerPrompts/>
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