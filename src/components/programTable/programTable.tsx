import React, {FC} from 'react';
import classes from "./programTable.module.css";
import {academicAPI} from "../../services/AcademicService";
import {useParams} from "react-router-dom";
import SemesterCard from "./semesterCard";

const ProgramTable:FC = () => {
    const {programID} = useParams();
    const {data:courseList} = academicAPI.useFetchCourseQuery(programID);
    // const {data:lectureList} = academicAPI.useFetchLectureQuery(courseList ? courseList.map(course => course.id) : [0] )
    // const {data:seminarList} = academicAPI.useFetchLectureQuery(courseList ? courseList.map(course => course.id) : [0] )

    return (
        <div className={classes.programTable}>
            <div className={classes.navTable}/>
            <div className={classes.coursesTable}>
                <h1>Семестр</h1>
                <div className={classes.semesterTable}>
                    <SemesterCard courseList={courseList}></SemesterCard>
                    <SemesterCard courseList={courseList}></SemesterCard>
                    <SemesterCard courseList={courseList}></SemesterCard>
                    <SemesterCard courseList={courseList}></SemesterCard>
                    <SemesterCard courseList={courseList}></SemesterCard>
                </div>
            </div>
            <div className={classes.descriptionCourse}>
            </div>
            <div className={classes.addTable}/>
        </div>
    );
};

export default ProgramTable;