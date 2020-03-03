export const ADD_COMPANY = 'ADD_COMPANY';
export const ADD_JOBS = 'ADD_JOBS';
export const DELETE_COMPANY = 'DELETE_COMPANY';
export const EDIT_JOB = 'EDIT_JOB'


export const addCompany = (payload) => ({
    type: ADD_COMPANY,
    payload
})

export const addJobs = (payload) => ({
    type: ADD_JOBS,
    payload
})

export const deleteCompany = (payload) => ({
    type: DELETE_COMPANY,
    payload
})

export const editJob = (payload) => ({
    type: EDIT_JOB,
    payload
})
