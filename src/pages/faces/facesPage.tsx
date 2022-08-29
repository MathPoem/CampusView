import React, {FC} from 'react';
import classes from "./facesPage.module.css"

const FacesPage:FC = () => {
    return (
        <div className={classes.facesPage}>
            <div className={classes.txt}>Скоро здесь можно будет посмотреть на <mark>интересных людей</mark></div>
        </div>
    );
};

export default FacesPage;