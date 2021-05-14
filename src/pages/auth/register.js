import './register.scss';


function Register() {

    return (
        <>
        <div id='page'>
            <h2>become a writr.</h2>
            <div>
                <form>
                    <label>Email</label>
                    <input type='email'/>
                    <label>Password</label>
                    <input type='password'/>
                    <label>Retype Password</label>
                    <input type='password'/>
                    <label> Username: </label>
                    <input type='text'/>
                    <label>Birthday</label>
                    <input type='date'/>
                    <label>Pick a Security Question (1):</label>
                    <select>
                        <option></option>
                    </select>
                    <label>Answer:</label>
                    <input type='text'/>
                    <label>Pick a Security Question (2):</label>
                    <select>
                        <option></option>
                    </select>
                    <label>Answer:</label>
                    <input type='text'/>
                    <button>Start Writing</button>
                </form>
            </div>
        </div>
        </>
    )

}

export default Register;