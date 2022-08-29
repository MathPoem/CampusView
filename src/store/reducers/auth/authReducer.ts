import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "./types";

const initialState:IUser = {
    university: Number(localStorage.getItem("university")),
    token: localStorage.getItem("token") || "",
    id: Number(localStorage.getItem("id")),
    username: localStorage.getItem("username") || "",
    email: localStorage.getItem("email") || "",
    program: Number(localStorage.getItem("program")),
    confirmed: localStorage.getItem("confirmed") === 'true'
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials(state, action:PayloadAction<IUser>) {
            state.id = action.payload.id
            state.program = action.payload.program
            state.email = action.payload.email
            state.university = action.payload.university
            state.token = action.payload.token
            state.username = action.payload.username
            state.confirmed = action.payload.confirmed
        },
        logout(state) {
            state.id = 0
            state.token = ""
            state.email = ""
            state.university = 0
            state.program = 0
            state.username = ""
            state.confirmed = false
        },
        setToken(state, action:PayloadAction<string>) {
            state.token = action.payload
        },
        activate(state) {
            state.confirmed = true
        }
    },
})

export const {setCredentials, logout, setToken, activate} = authSlice.actions
export default authSlice.reducer