import { ADD_COMPANY, ADD_JOBS, DELETE_COMPANY, EDIT_JOB } from './action';

let initialState = {
    companyList : [],
    jobList : []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_COMPANY:
            return {
                ...state,
                companyList : [...state.companyList, action.payload]
            }

        case ADD_JOBS:
            return {
                ...state,
                jobList : [...state.jobList, action.payload]
            }

        case DELETE_COMPANY:
            console.log(action.payload)
            return {
                ...state,
                jobList : state.jobList.filter((item,index) => index !== action.payload)
            }

        case EDIT_JOB:
            console.log(action.payload)
            return {
                ...state,
                jobList : state.jobList.map((item,index)=> index == action.payload.id ? action.payload.obj : item)
            }

        default:
            return state;
    }
}

export default reducer