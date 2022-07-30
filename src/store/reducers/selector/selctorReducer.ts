import {IAcademic} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialAcademic: IAcademic = {
    university: {
        isActive: true,
        isOpen: false,
        id: 0,
        value: ""
    },
    school: {
        isActive: false,
        isOpen: false,
        id: 0,
        value: ""
    },
    program: {
        isActive: false,
        isOpen:false,
        id: 0,
        value: ""
    }
}

export const selectSlice = createSlice({
    name: "select",
    initialState: initialAcademic,
    reducers: {
        openUniversity(state, action: PayloadAction<boolean>) {
            state.university.isOpen = action.payload
            state.school.isOpen = false
            state.program.isOpen = false

        },
        openSchool(state, action: PayloadAction<boolean>) {
            state.school.isOpen = action.payload
            state.program.isOpen = false
            state.university.isOpen = false
        },
        openProgram(state, action: PayloadAction<boolean>) {
            state.program.isOpen = action.payload
            state.university.isOpen = false
            state.school.isOpen = false
        },
        allClose(state) {
            state.program.isOpen = false
            state.university.isOpen = false
            state.school.isOpen = false
        },
        setUniversity(state, action: PayloadAction<number>) {
            state.university.isOpen = false
            state.university.id = action.payload
            state.program.id = 0
            state.school.id = 0
            state.program.value = ""
            state.school.value = ""
            state.school.isActive = true
            state.program.isActive = false
        },
        setSchool(state, action: PayloadAction<number>) {
            state.school.isOpen = false
            state.program.isActive = true
            state.school.id = action.payload
            state.program.id = 0
            state.program.value = ""
        },
        setValueUniversity(state, action:PayloadAction<string>) {
            state.university.value = action.payload
        },
        setValueSchool(state, action:PayloadAction<string>) {
            state.school.value = action.payload
        },
        setValueProgram(state, action:PayloadAction<string>) {
            state.program.value = action.payload
        }
    }
});

export default selectSlice.reducer