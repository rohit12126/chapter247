import * as actionTypes from "./actionTypes";
import axios from 'axios';

export const getEmployee = () => {
    return dispatch => {
        axios.get('users').then(response => {
            console.log(response.data);
            dispatch(success(response.data));
        }).catch(error => {
            dispatch(failure(error))
        })
    }
}
export const getEmployeeById = (id) => {
    //const success = (data) => {type: actionTypes.GET_EMPLOYEE_BY_ID,data}
    return dispatch => {
        axios.get(`users/${id}`).then(response => {
            console.log(response.data);
            dispatch(getEmployeeByIdSuccess(response.data));
        }).catch(error => {
            dispatch(failure(error))
        })
    }   
}
export const addEmployee = (data) => {
    return dispatch => {
        axios.post(`users`).then(response => {
            console.log(response.data);
            dispatch(addSuccess(data));
        }).catch(error => {
            dispatch(failure(error))
        })
    }
}
export const deleteById = (id) => {
    //const success = (data) => {type: actionTypes.GET_EMPLOYEE_BY_ID,data}
    return dispatch => {
        axios.delete(`users/${id}`).then(response => {
            console.log(response);
            dispatch(deleteSuccess(id))
        }).catch(error => {
            dispatch(failure(error))
        })
    }
    
}
 
const success = (data) => {
    return {
        type: actionTypes.GET_EMPLOYEE,
        data
    }
}
const getEmployeeByIdSuccess = (data) => {
    return {
        type: actionTypes.GET_EMPLOYEE_BY_ID,
        data
    }
}
const addSuccess = (id) => {
    return {
        type: actionTypes.ADD_EMPLOYEE,
        id
    }
}
const deleteSuccess = (id) => {
    return {
        type: actionTypes.DELETE_EMPLOYEE,
        id
    }
}
const failure = (error) => {
    return {
        type: actionTypes.FAILURE,
        error,
    }
}