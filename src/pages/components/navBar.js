import React from 'react'
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Logo from "../components/logo-itviec.png";

const NavBar = ({handleSearch, keyword, setKeyword}) => {
    let history = useHistory();

    const goToHomePage = (event) => {
        event.preventDefault();
        history.push(`/`);
      };

    return (
        <div>
            <Navbar
                className="sticky-top"
                expand="md"
                bg="dark"
                variant="dark"
                >
                
                
                <img src={Logo} onClick={(event) => goToHomePage(event)}/>
                    <Nav className="mr-auto" />
                    
                        <Form
                        inline
                        onSubmit={(event) => {
                            event.preventDefault();
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
                </Navbar>
            
        </div>
    )
}

export default NavBar
