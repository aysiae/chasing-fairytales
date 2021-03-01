import './login.scss'

function Login () {

    return(
        <>
        <div className='login'>
            <h2>Login:</h2>
            <form style={{marginTop: '50px'}}>
                <label className='username'>Username:</label>
                <input className='username' type='text'></input> {' '}
                <label className='password'>Password:</label>
                <input className='password' type='password'></input>
                <button>Go</button>
            </form>
        </div>
        </>
    )
    
}

export default Login;