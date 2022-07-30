import {HeaderAction, HeaderActionsEnum, HeaderState, SetHeaderAction} from "./types";


const initialState:HeaderState = {
    isActive: false
}

export default function headerReducer(state = initialState, action: HeaderAction): HeaderState {
    switch (action.type) {
        case HeaderActionsEnum.SET_HEADER:
            return {...state, isActive: action.payload}
        default:
            return state;
    }
}

export const changeHeaderAction = (payload:boolean):SetHeaderAction => ({type: HeaderActionsEnum.SET_HEADER, payload: payload})