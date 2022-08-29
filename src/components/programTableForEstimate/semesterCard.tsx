import React, {FC} from 'react';
import {ICourse} from "../../models/IAcademic";
import classes from "./semesterCard.module.css"
import CourseCard from "./courseCard";

interface semesterCardProps {
    courseList: ICourse[]
    semesterNum: number
}

const SemesterCard: FC<semesterCardProps> = ({courseList, semesterNum}) => {
    let courses = courseList.filter(course => course.semester === semesterNum)
    let sumHours = 0
    courses.map(course => sumHours += course.hoursSeminar + course.hoursLecture)
    return (
        <div className={classes.semesterCard}>
            <div className={classes.navigation}/>
            <div className={classes.courseList}>
                {courses.map(course =>
                    <CourseCard
                        key={course.id}
                        course={course}
                        sumHours={sumHours}
                    />)
                }
            </div>
        </div>
    );
};

export default SemesterCard;