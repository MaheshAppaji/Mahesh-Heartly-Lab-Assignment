import React, {useState} from 'react'
import { Alert} from "react-bootstrap"
import Login from '../Login/login';


function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);


    function onSubmitForm(e){
        e.preventDefault()

        if(!firstName || !lastName || !email || !password || !confirmPassword){
            setFlag(true);
        }else{
            setFlag(false);
            localStorage.setItem("maheshEmail", JSON.stringify(email));
            localStorage.setItem("maheshPassword", JSON.stringify(password))

            console.log("Saved in Local Storage");
            setLogin(!login)
        }

    }

    function onClickLogin(){
        setLogin(!login)
    }

  return (
    <>
    <div>
        {login ? (
        <form onSubmit={onSubmitForm} className="registration-form-container">
            <h1 className="form-title">Register</h1>
            <div className='form-group mt-3 mb-3'>
                <label>First Name</label>
                <input type='text'
                    className='form-control'
                    placeholder='enter first name'
                    onChange={(event)=> setFirstName(event.target.value)} />
            </div>
            <div className='form-group mt-3 mb-3'>
                <label>last Name</label>
                <input type='text'
                    className='form-control'
                    placeholder='enter last name'
                    onChange={(event)=> setLastName(event.target.value)}/>
            </div>
            <div className='form-group mt-3 mb-3'>
                <label>Email</label>
                <input type='email'
                    className='form-control'
                    placeholder='enter email'
                    onChange={(event)=> setEmail(event.target.value)}/>
            </div>
            <div className='form-group mt-3 mb-3'>
                <label>Password</label>
                <input type='password'
                    className='form-control'
                    placeholder='enter password'
                    onChange={(event)=> setPassword(event.target.value)}/>
            </div>
            <div className='form-group mt-3 mb-3'>
                <label>Confirm Password</label>
                <input type='password'
                    className='form-control'
                    placeholder='confirm password'
                    onChange={(event)=> setConfirmPassword(event.target.value)}/>
            </div>
            <button type='submit' className='btn btn-dark btn-lg btn-block mt-3 mb-3'>Register</button>
            <p onClick={onClickLogin}>Already registered{" "} login</p>

        {flag && (
            <Alert color="primary" variant="danger">
                Please Fill Every Field
            </Alert>
        )}

        </form>
    ):(
        <Login/>
        )}
        
        
    </div>
    </>
  )
}

export default Register