import React, {FC} from 'react';
import classes from './Logo.module.css';
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../router/route";
import {useAppDispatch} from "../../hooks/redux";
import {changeHeaderAction} from "../../store/reducers/header/headerReducer";

const Logo :FC= () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const navigateService = () => {
        navigate(RouteNames.HOME)
        dispatch(changeHeaderAction(true))
    }
    return (
            <div
                onClick={navigateService}
                className={classes.Logo}
            />
    );
};

export default Logo;