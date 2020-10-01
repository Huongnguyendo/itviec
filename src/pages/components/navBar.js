import React from "react";
import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Logo from "../components/logo-itviec.png";
import { useSelector, useDispatch } from "react-redux";

const NavBar = ({ handleSearch, keyword, setKeyword, email }) => {
  let dispatch = useDispatch();
  let history = useHistory();

  const goToHomePage = (event) => {
    event.preventDefault();
    history.push(`/`);
  };

  const goToLogInPage = (event) => {
    event.preventDefault();
    history.push(`/login`);
  };

  const logOut = (event) => {
    event.preventDefault();
    dispatch({ type: "LOGOUT" });
    history.push(`/`);
  };

  const user = useSelector((state) => state.auth.user);


  return (
    <div>
      <Navbar className="sticky-top navbar" expand="md" bg="dark" variant="dark">
        <img src={Logo} onClick={(event) => goToHomePage(event)} />
        <Nav className="d-flex" > 
            {/* <Form
          inline
          onSubmit={(event) => {
            handleSearch(event, keyword);
            setKeyword("");
          }}
        >
          <FormControl
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
          
          </Form>
             */}
             {user.email ? <p className="welcome-text ml-5 mr-5"> Welcome back <br/>{email }</p> : ""}
            {!user.email && <Button
            className="logInBtn mr-2 ml-3"
                onClick={(event) => goToLogInPage(event)}
            >
                Login
            </Button>}
            {user.email && <Button className="logOutBtn"
                onClick={(event) => logOut(event)}
            >
                Logout
            </Button>}
            
            
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
