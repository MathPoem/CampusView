import {registerForm} from "../../../services/UserService";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface RegisterState {
    user: registerForm
    status: boolean
}

const initialState:RegisterState = {
    status: false,
    user: {
        username: "",
        password: "",
        program: 0,
        univ: 0,
        email: ""
    }
}

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setStatus(state, action:PayloadAction<boolean>){
          state.status = action.payload
        },
        setUsername(state, action:PayloadAction<string>){
            state.user.username = action.payload
        },
        setPassword(state, action:PayloadAction<string>){
            state.user.password = action.payload
        },
        setProgram(state, action:PayloadAction<number>){
            state.user.program = action.payload
        },
        setUniversity(state, action:PayloadAction<number>){
            state.user.univ = action.payload
        },
        setEmail(state, action:PayloadAction<string>){
            state.user.email = action.payload
        },
    }
})

export default registerSlice.reducer
