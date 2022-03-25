import * as ActionTypes from './dataActions';

export const getMessage = (message:string , name:string) => ({
    type : ActionTypes.GET_MESSAGE,
    payload : {
        message : message,
        name : name
    }
})