import {CourseCard} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState:CourseCard = {
    error: "",
    isLoading: false,
    selectCourse: 0
}

const courseCardSlice = createSlice({
    name: "courseCard",
    initialState,
    reducers: {
        selectCourse(state, action:PayloadAction<number>) {
            state.selectCourse = action.payload
        },
    }
})