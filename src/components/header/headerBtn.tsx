import React, {FC} from 'react';
import classes from "./header.module.css";
import MyButton from "../MyButton/MyButton";
import {RouteNames} from "../../router/route";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {changeHeaderAction} from "../../store/reducers/header/headerReducer";
import "./header.module.css";

interface HeaderBtnProps {
    name: string;
    destination: RouteNames;
    imgPath: string;
}

const HeaderBtn:FC<HeaderBtnProps> = ({imgPath, destination, name}) => {
    const {isActive} = useAppSelector(state => state.header)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const navigateService = () => {
        navigate(destination)
        dispatch(changeHeaderAction(false))
    }
    return (
        <div className={classes.headerBtn}>
            <img className={`${classes.headerImg} ${isActive && classes.active}`} src={imgPath} alt="view"></img>
            <MyButton onClick={navigateService}>{name}</MyButton>
        </div>
    );
};

export default HeaderBtn;