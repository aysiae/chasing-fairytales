import './login.scss'

function Login () {

    return(
        <>
        <div className='container'>
            <h2>hello writr!</h2>
            <div className='login'>
                <form style={{marginTop: '50px'}}>
                    <label className='label'>Email:</label>
                    <input className='text' type='text'></input> {' '}
                    <label className='label'>Password:</label>
                    <input className='text' type='password'></input>
                    <button>sign in</button>
                </form>
            </div>
        </div>
        </>
    )
    
}

export default Login;