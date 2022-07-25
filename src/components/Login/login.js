import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Header from '../Header/header';



function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [header, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("maheshPassword")
      .replace(/"/g,"");
    let mail = localStorage.getItem("maheshEmail").replace(/"/g,"");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!header);
      setFlag(false);
    }
  }

  return (
    <div>
      {header ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block mt-3 mb-3">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Please Fill specified Fields.
            </Alert>
          )}
        </form>
      ) : (
    <Header />
      )}
    </div>
  );
}

export default Login;