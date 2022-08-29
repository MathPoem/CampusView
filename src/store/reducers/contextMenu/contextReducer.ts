import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface ContextReducer {
    active: boolean
}

const initialState:ContextReducer = {
    active: false
}

export const contextSlice = createSlice({
    name:"ctxMenu",
    initialState,
    reducers: {
        setContext(state, action:PayloadAction<boolean>) {
            state.active = action.payload
        }
    }
})

export default contextSlice.reducer