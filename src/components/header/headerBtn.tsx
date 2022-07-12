import React, {FC} from 'react';
import classes from "./header.module.css";
import MyButton from "../MyButton/MyButton";
import {RouteNames} from "../../router/route";
import {useLocation, useNavigate} from "react-router-dom";
import "./header.module.css";

interface HeaderBtnProps {
    name: string;
    destination: RouteNames;
    imgPath: string;
}

const HeaderBtn:FC<HeaderBtnProps> = ({imgPath, destination, name}) => {
    const navigate = useNavigate()
    const navigateService = () => {navigate(destination)}
    const location = useLocation()
    return (
        <div className={classes.headerBtn}>
            <img className={`${classes.headerImg} ${location.pathname === "/" && classes.active}`} src={imgPath} alt="view"></img>
            <MyButton onClick={navigateService}>{name}</MyButton>
        </div>
    );
};

export default HeaderBtn;