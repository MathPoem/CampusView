import React, {FC} from 'react';
import classes from "./programTable.module.css";
import {academicAPI} from "../../services/AcademicService";
import {useParams} from "react-router-dom";
import SemesterCard from "./semesterCard";
import DescriptionCourse from "./descriptionCourse";


const ProgramTable:FC = () => {
    const {programID} = useParams();
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
                <DescriptionCourse/>
            </div>
            <div className={classes.addTable}/>
        </div>
    );
};

export default ProgramTable;