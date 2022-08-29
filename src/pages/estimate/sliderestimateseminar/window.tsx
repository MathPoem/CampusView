import React, {FC, useState} from 'react';
import classes from "./window.module.css"
import {academicAPI} from "../../../services/AcademicService";

interface windowProps {
    personId: number
    edge: boolean
}

const Window: FC<windowProps> = ({personId, edge}) => {
    const {data: person} = academicAPI.useFetchPersonByIdQuery(personId)
    const [desc, setDesc] = useState(false)

    return (
        <>
            <div className={`${classes.window} ${edge ? classes.edge : classes.center}`} onMouseOver={()=>setDesc(true)} onMouseOut={()=>{setDesc(false)}}>
                <h1>{person?.id}</h1>
            </div>
            <div className={`${classes.description} ${(desc && !edge) && classes.active}`}>
                <div>{person?.secondName}</div>
                <div>{person?.firstName}</div>
                <div>{person?.middleName}</div>
            </div>
        </>
    );
};

export default Window;