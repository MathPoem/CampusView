import React, {FC} from 'react';
import classes from "./campusPage.module.css";
import "../../App.css";
import SelectorField from "../../components/UI/selector/SelectorField";
import {useAppDispatch} from "../../hooks/redux";
import {selectSlice} from "../../store/reducers/selector/selctorReducer";

const CampusPage: FC = () => {
    const dispatch = useAppDispatch()
    const {allClose} = selectSlice.actions
    const outClick = () => dispatch(allClose())
    return (
            <div className={classes.campusPage} onClick={outClick}>
                <SelectorField/>
            </div>
    );
};

export default CampusPage;