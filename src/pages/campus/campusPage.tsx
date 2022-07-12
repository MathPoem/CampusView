import React, {FC} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import classes from "./campusPage.module.css";

const CampusPage: FC = () => {
    return (
            <TransitionGroup>
                <CSSTransition
                        timeout={500}
                        classNames="campus"
                >
                    <div className={classes.campusPage}></div>
                </CSSTransition>
            </TransitionGroup>
    );
};

export default CampusPage;