import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface EstimateState {
    course_id:number
    lecture_id: number
    seminar_id: number
    question_lec_1: number
    question_lec_2: number
    question_lec_3: number
    question_lec_4: number
    question_lec_5: number
    question_sem_1: number
    question_sem_2: number
    question_sem_3: number
    question_sem_4: number
    question_sem_5: number
}

const initialState:EstimateState = {
    course_id: 0,
    seminar_id: 0,
    lecture_id: 0,
    question_lec_1: 0,
    question_lec_2: 0,
    question_lec_3: 0,
    question_lec_4: 0,
    question_lec_5: 0,
    question_sem_1: 0,
    question_sem_2: 0,
    question_sem_3: 0,
    question_sem_4: 0,
    question_sem_5: 0,
}


export const estimateSlice = createSlice({
    name: "estimate",
    initialState,
    reducers: {
        lec_1(state, action:PayloadAction<number>) {
            state.question_lec_1 = action.payload
        },
        lec_2(state, action:PayloadAction<number>) {
            state.question_lec_2 = action.payload
        },
        lec_3(state, action:PayloadAction<number>) {
            state.question_lec_3 = action.payload
        },
        lec_4(state, action:PayloadAction<number>) {
            state.question_lec_4 = action.payload
        },
        lec_5(state, action:PayloadAction<number>) {
            state.question_lec_5 = action.payload
        },
        sem_1(state, action:PayloadAction<number>) {
            state.question_sem_1 = action.payload
        },
        sem_2(state, action:PayloadAction<number>) {
            state.question_sem_2 = action.payload
        },
        sem_3(state, action:PayloadAction<number>) {
            state.question_sem_3 = action.payload
        },
        sem_4(state, action:PayloadAction<number>) {
            state.question_sem_4 = action.payload
        },
        sem_5(state, action:PayloadAction<number>) {
            state.question_sem_5 = action.payload
        },
        setLecture(state, action:PayloadAction<number>) {
            state.lecture_id = action.payload
        },
        setSeminar(state, action:PayloadAction<number>) {
            state.seminar_id = action.payload
        },
        setCourse(state, action:PayloadAction<number>) {
            state.course_id = action.payload
        }
    }
})

export default estimateSlice.reducer