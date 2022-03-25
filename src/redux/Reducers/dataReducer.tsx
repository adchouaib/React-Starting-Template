import * as ActionTypes from '../Actions/dataActions/dataActions';

import { dataStruct } from '../../models/dataModel';

const Data:dataStruct[] = [
    {
        id : 0,
        message : "hello",
        name : "chouaib"
    }
];

export const dataReducer = (state = Data, action:any) => {

    switch (action.type){
        case ActionTypes.GET_MESSAGE:
            var inData = action.payload;
            inData.id = state.length;
            return state.concat(inData);

        default: 
            return state;
    }
    
}