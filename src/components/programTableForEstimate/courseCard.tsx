import React, {FC} from 'react';
import classes from "./courseCard.module.css"
import {ICourse} from "../../models/IAcademic";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {courseCardSlice} from "../../store/reducers/courseCard/courseCardReducer";

interface courseCardProps {
    course: ICourse;
    sumHours: number;
}

const CourseCard:FC<courseCardProps> = ({ course, sumHours}) => {
    const widthLecture = Math.floor(course.hoursLecture/sumHours*100+4)
    const widthSeminar = Math.floor(course.hoursSeminar/sumHours*100+4)

    const {selectCourse} = useAppSelector(state => state.courseCard)

    const dispatch = useAppDispatch()
    const {setCourse} = courseCardSlice.actions

    const callBack = () => {
        dispatch(setCourse(course))
    }
    const activeClass = () => {return (selectCourse === course) ? classes.active: ""}

    return (
        <div
            className={`${classes.courseCard} ${activeClass()}`}
            onClick={callBack}
        >
            {course.name}
            <div className={`${classes.footLine} ${activeClass()}`}>
                <div style={{width: `${widthLecture + widthSeminar}%`}} className={`${classes.blackLine} ${activeClass()}`}></div>
                <div style={{width: `${widthLecture}%`}} className={`${classes.lectureLine} ${activeClass()}`}></div>
                <div style={{width: `${widthSeminar}%`}} className={`${classes.seminarLine} ${activeClass()}`}></div>
            </div>
        </div>
    );
};

export default CourseCard;