import React, {FC} from 'react';
import classes from "./window.module.css"
import {academicAPI} from "../../../services/AcademicService";

interface windowProps {
    personId: number
    edge: boolean
}

const Window:FC<windowProps> = ({personId, edge}) => {
    const {data: person} = academicAPI.useFetchPersonByIdQuery(personId)

    return (
        <div className={`${classes.window} ${edge? classes.edge: classes.center}`}>
            <h1>{person?.id}</h1>
        </div>
    );
};

export default Window;