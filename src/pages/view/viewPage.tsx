import React, {FC} from 'react';
import classes from "./viewPage.module.css"

const ViewPage:FC = () => {
    return (
        <div className={classes.viewPage}>
            <div className={classes.txt}>Скоро здесь будет много <mark>интересных статей</mark> об образовании</div>
        </div>
    );
};

export default ViewPage;