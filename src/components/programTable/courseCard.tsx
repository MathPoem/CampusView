import React, {FC} from 'react';
import classes from "./courseCard.module.css"

interface courseCardProps {
    name: string;
}

const CourseCard:FC<courseCardProps> = ({name}) => {
    return (
        <div className={classes.courseCard}>
            {name}
            <div className={`${classes.footLine}`}/>
        </div>
    );
};

export default CourseCard;