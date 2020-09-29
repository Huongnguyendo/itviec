import React, { useState, useEffect } from "react";
import { Badge, Row, Col } from "react-bootstrap";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import JobCard from "./components/jobCard";
import NavBar from "./components/navBar";

const QUERYSTR_PREFIX = "q";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Job = () => {
  const [jobList, setJobList] = useState([]);
  const [originalJobs, setOriginalJobs] = useState([]);

  const history = useHistory();
  let query = useQuery();
  let [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX));

  const getJobData = async () => {
    try {
      const url = `http://localhost:3001/jobs`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("data: ", data);
      setJobList(data);
      setOriginalJobs(data);
    } catch (err) {
      console.log(err.message);
    }

    // handleSearch();
  };

  const handleSearch = (e) => {
    let filteredJobs = originalJobs;
    if (e) {
      e.preventDefault();
      history.push(`/jobs/?${QUERYSTR_PREFIX}=${encodeURIComponent(keyword)}`);
    }
    if (keyword) {
      filteredJobs = originalJobs.filter(job =>
        job.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    setJobList(filteredJobs);
  };

  // use history to go to other routes
  const goToJobDetail = (id) => {
    //   return <Redirect to="./detail"/>
    history.push(`/detail/${id}`);
  };

  useEffect(() => {
    getJobData();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [originalJobs]);

  return (
    <div>
        <NavBar
        handleSearch={handleSearch}
        keyword={keyword}
        setKeyword={setKeyword}
      ></NavBar>
      {/* {jobList &&
        jobList.map((item) => (
          <h1 onClick={() => goToJobDetail(item.id)}>{item.title}</h1>  
        ))} */}
        {jobList && jobList.map(item => <JobCard className="job-content" job={item} key={item.id} />)}
        
        
    </div>
  );
};

export default Job;
