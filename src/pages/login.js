import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../redux/action/authAction";
import { useHistory } from "react-router-dom";
import NavBar from "./components/navBar";
import Favicon from "./components/favicon-login.png";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  let [email, setEmail] = useState(null);
  let [password, setPassword] = useState(null);
  let history = useHistory();

  const loginFunc = (e) => {
    e.preventDefault();
    const user = { email: email, password: password };
    // dispatch to authAction action
    console.log("HAHAHAHA", email, password);
    dispatch(authAction.login(user));

    // redirect to job detail page
    history.push("/jobs");
  };

  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="white-container">
          <div className="login-title-box">
            <img src={Favicon} />
            <h3 className="text-white ml-2 mt-2">Login</h3>
          </div>
          <div id="login-form" className="row login main-content text-center">
            <div className="col-md-8 col-xs-12 col-sm-12 login login_form ">
              <div className="container-fluid">
                <div className="login row">
                  {!user && <h2>Log In</h2>}
                  <h2>{user && user.email}</h2>
                </div>
                <div className="login row">
                  <form control="" className="login form-group">
                    <div className="login row">
                      <p>Email address</p>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="login form__input"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span className="email-text">We'll never share your email with anyone else.</span>
                    </div>
                    <div className="login row mt-3">
                      <p>Password</p>
                      <input
                        type="password"
                        name="password"
                        className="login form__input"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="login row mt-3">
                      <input
                        type="checkbox"
                        name="checkmeout"
                        id="checkmeout"
                        className="mr-2 mt-1"
                      />
                    <label for="checkmeout">Check me out</label>
                  </div>
                    <div className="login row mt-3">
                      <button
                        type="submit"
                        value="submit"
                        className="login btn btn-danger"
                        onClick={(e) => loginFunc(e)}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
