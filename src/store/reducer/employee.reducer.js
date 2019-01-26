const initialState = {
    employeeList: '',
    employee: '',
    error: ''
}

export const employeeReducer = (state = initialState, action) => {
    console.log('action.data');
    switch (action.type) {
        case 'GET_EMPLOYEE':
            return {
                ...state,
                employeeList: action.data
            }
        case 'GET_EMPLOYEE_BY_ID':
            return {
                ...state,
                employee: action.data
            }
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                employeeList: [
                    ...state.employeeList,
                    action.data
                ]
            }
        case 'UODATE_EMPLOYEE':
            return {
                ...state,
                employeeList: [
                    ...state.employeeList,
                    [action.id]
                ]
            }
        case 'DELETE_EMPLOYEE':
            return {
                ...state,
                employeeList: {
                    ...state.employeeList,
                    employeeList: state.employeeList.splice(action.id, 1)
                }
            }
        case 'FAILURE':
            return {
                ...state,
                error: action.error.message
            }
        default:
            return state
    }
}