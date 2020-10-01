import React, { useState, useEffect } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faMapMarker,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";
import NavBar from "./components/navBar";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;


const JobDetail = ({ name }) => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  const getDetailData = async () => {
    const url = `${SERVER_URL}/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data detail", data);
    setJob(data);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="outer-container">
      <NavBar />
      <div className="middle container">
        <Container className="white-container" style={{ textAlign: "left" }}>
          {/* <h1>Detail page</h1> */}
          <Row style={{ marginLeft: "-15", marginRight: "-15" }}>
            <Col sm={2}>
              <img src={job.img} />
            </Col>
            <Col sm={10}>
              <h2>{job.title}</h2>
              {job.tags.map((tag) => (
                <Badge className="badge badge-secondary mr-2">{tag}</Badge>
              ))}
              <p style={{color: "grey", paddingTop: "10px"}}>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  style={{ marginRight: "10px" }}
                />{" "}
                {job.salary}
              </p>
              <p style={{color: "grey"}}>
                <FontAwesomeIcon
                  icon={faMapMarker}
                  style={{ marginRight: "10px" }}
                />{" "}
                {job.city}. District: {job.district}
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  style={{ marginRight: "10px", color: "blue" }}
                />{" "}
                <Moment fromNow style={{ color: "blue" }}>{job.time}</Moment>
              </p>
              <h2>Benefit</h2>
              {job.benefits.map((benefit) => (
                <ul>
                    <li>{benefit}</li>
                </ul>
              ))}
              <h2>Description</h2>
              <p>{job.description}</p>
              <Button type="submit" className="btn btn-danger btn-apply">
                Apply Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default JobDetail;
