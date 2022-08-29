import {ICourse} from "../../../models/IAcademic";

export interface CourseCard {
    isLoading: boolean
    selectCourse: ICourse
    error: string
}