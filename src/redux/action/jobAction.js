const getJobData = () => async (dispatch) => {
    try {
        const url = `http://localhost:3001/jobs`;
        const response = await fetch(url);
        const data = await response.json();
        console.log("data: ", data);
        // setJobList(data);
        // setOriginalJobs(data);
        dispatch({type: "GET_JOB_SUCCESS", payload: data})
      } catch (err) {
        dispatch({type: "LOGIN_FAIL", payload: err.message})
      }
}

export const JobAction = {
    getJobData
}
