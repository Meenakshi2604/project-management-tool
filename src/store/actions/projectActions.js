export const createProject = (project) => {
    return(dispatch, getState) => {
        //to make async calls to database
        dispatch({type: 'CREATE_PROJECT', project: project});
    }
};