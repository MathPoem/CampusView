import {CourseCard} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICourse} from "../../../models/IAcademic";


const initialState:CourseCard = {
    error: "",
    isLoading: false,
    selectCourse:
        {
            id: 0,
            url: '',
            hoursSeminar: 0,
            exam: false,
            hoursLecture: 0,
            semester: 0,
            name: "",
            credits: 0,
            description: '',
            estimationInDiploma: false,
            test: false,
            programID: 0,
        },
}

export const courseCardSlice = createSlice({
    name: "courseCard",
    initialState,
    reducers: {
        setCourse(state, action:PayloadAction<ICourse>) {
            state.selectCourse = action.payload
        },
    }
})

export default courseCardSlice.reducer