import React, {FC} from 'react';
import classes from "./programTableForEstimate.module.css";
import {academicAPI} from "../../services/AcademicService";
import SemesterCard from "./semesterCard";
import DescriptionCourseForEstimate from "./descriptionCourseEstimate";
import {useAppSelector} from "../../hooks/redux";

const ProgramTableForEstimate:FC = () => {
    const {program:programID} = useAppSelector(state => state.auth)
    const {data:courseList} = academicAPI.useFetchCourseQuery(programID);
    const {data:program} = academicAPI.useFetchProgramByIdQuery(programID)

    const arr = (num:number) => Array.from({length:num}, (_,i) => i + 1)
    
    return (
        <div className={classes.programTable}>
            <div className={classes.navTable}/>
            <div className={classes.coursesTable}>
                <h1>Семестр</h1>
                <div className={classes.semesterTable}>
                    {(courseList && program) &&
                        arr(program.semester).map(num =>
                        <SemesterCard courseList={courseList} semesterNum={num} key={num}/>)
                    }
                </div>
            </div>
            <div className={classes.descriptionCourse}>
                <DescriptionCourseForEstimate/>
            </div>
            <div className={classes.addTable}/>
        </div>
    );
};

export default ProgramTableForEstimate;