import React from "react";
import { Form, FormControl, Nav, Navbar, Button, Jumbotron } from "react-bootstrap";

const JumbotronArea = ({ handleSearch, keyword, setKeyword }) => {
  return (
    <div>
      <Jumbotron className="jumbotron-area">
        <Form
          inline
          onSubmit={(event) => {
            handleSearch(event, keyword);
            setKeyword("");
          }}
        >
            <i class="fa fa-search"></i>
          <FormControl
            className="jumbotron-input mr-2"
            type="text"
            placeholder="Keyword skill (Java, iOS...), Job Title, Company..."
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
          
          <Button type="submit" variant="danger">Search</Button>
        </Form>
      </Jumbotron>
    </div>
  );
};

export default JumbotronArea;
