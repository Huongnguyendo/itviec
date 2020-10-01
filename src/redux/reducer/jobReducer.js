const initialState = {
    originalJobList: []
}

const JobReducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case "GET_JOB_SUCCESS":
            state.originalJobList = [...payload];
            return {... state};
        default:
            return {...state}
    }
}

export default JobReducer;