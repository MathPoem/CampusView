import React, {FC} from 'react';
import classes from "./programPage.module.css";
import ProgramTable from "../../components/programTable/programTable";

const ProgramPage:FC = () => {
    return (
        <div className={classes.programPage}>
            <ProgramTable/>
        </div>
    );
};

export default ProgramPage;