import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import Moment from 'react-moment';
import { useHistory } from "react-router-dom";


const JobCard = ({job, key}) => {
    let history = useHistory();

    const jobSelect = () => {
        history.push(`/job/${job.id}`);
    };

    return (
        <div className="job-content" onClick={() => jobSelect()}>
        <Row className="card-row">
            <Col className="d-flex justify-content-center pr-0">
            <div className="jobcard-logo">
                <img src={job.img} />
            </div>
            </Col>
            <Col xs={8}>
            <div className="jobcard-descriptions">
                <h2 className="jobcard-title">{job.title}</h2>
                <div>$ {job.salary}</div>
                <div>
                <ul className="benefit-list">
                    {job.benefits.map((benefit) => (
                    <li>{benefit}</li>
                    ))}
                </ul>
                </div>
                <div>
                {job.tags.map((tag) => (
                    <Badge variant="secondary" className="badge-style mr-2">
                    {tag}
                    </Badge>
                ))}
                </div>
            </div>
            </Col>
            <Col>
            <div className="date-location-box">
                {job.isHotjob ? (
                <div className="hotjob-label">Hot Job</div>
                ) : (
                <div></div>
                )}

                <div className="jobcard-location">
                <div>{job.city}</div>
                <div>District {job.district}</div>
                </div>
                <div className="job-time">{<Moment fromNow>{job.time}</Moment>}</div>
            </div>
            </Col>
        </Row>
    
    </div>
  );
};

export default JobCard;
