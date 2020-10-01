import React, { useState, useEffect } from "react";
import { Badge, Row, Col } from "react-bootstrap";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import JobCard from "./components/jobCard";
import JumbotronArea from "./components/jumbotron";
import NavBar from "./components/navBar";
import {JobAction} from "../redux/action/jobAction";
import { useDispatch, useSelector } from 'react-redux';


const QUERYSTR_PREFIX = "q";

// 1. hook, help read query value
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Job = () => {
  const dispatch = useDispatch();
  const [jobList, setJobList] = useState([]);
  // const [originalJobs, setOriginalJobs] = useState([]);
  const originalJobs = useSelector(state => state.job.originalJobList);

  const user = useSelector((state) => state.auth.user);
  const err = useSelector((state) => state.auth.err);

  const history = useHistory();
  // 2.
  let query = useQuery();
  // 3. only get the value of the query
  let [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX));

  const getJobData = async () => {
    // try {
    //   const url = `http://localhost:3001/jobs`;
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   console.log("data: ", data);
    //   setJobList(data); //
    //   setOriginalJobs(data);
    // } catch (err) {
    //   console.log(err.message);
    // }

    dispatch(JobAction.getJobData());
  };

  const handleSearch = (e) => {
    // if theres no event or keyword, this skips to the setJobList(originalJobs);
    let filteredJobs = originalJobs;
    if (e) {
      e.preventDefault();
      history.push(`/jobs/?${QUERYSTR_PREFIX}=${encodeURIComponent(keyword)}`);
    }
    // 4.
    // 5. original list
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
        email={user && user.email}
      ></NavBar>
      {err && <h3 className="err-message">{err}</h3>}
      <JumbotronArea handleSearch={handleSearch}
        keyword={keyword}
        setKeyword={setKeyword} />
      
      {/* {jobList &&
        jobList.map((item) => (
          <h1 onClick={() => goToJobDetail(item.id)}>{item.title}</h1>  
        ))} */}
        <div className="jobList-area">
          {jobList && jobList.map(item => <JobCard className="job-content" job={item} key={item.id} />)}
        </div>
        
    </div>
  );
};

export default Job;
