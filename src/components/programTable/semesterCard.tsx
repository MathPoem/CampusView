import React, {FC} from 'react';
import {ICourse} from "../../models/IAcademic";
import classes from "./semesterCard.module.css"
import CourseCard from "./courseCard";

interface semesterCardProps {
    courseList: ICourse[]|undefined
}

const SemesterCard:FC<semesterCardProps>= ({courseList}) => {
    return (
        <div className={classes.semesterCard}>
            <div className={classes.navigation}/>
            <div className={classes.courseList}>
            {courseList ?
                courseList.map(course => <CourseCard key={course.id} name={course.name}/>)
                :
                <h1>нет курсов</h1>
            }
            </div>
        </div>
    );
};

export default SemesterCard;