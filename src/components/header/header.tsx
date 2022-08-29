import React, {FC} from 'react';
import classes from "./header.module.css";
import Logo from "../Logo/Logo";
import {RouteNames} from "../../router/route";
import HeaderBtn from "./headerBtn";
import {useAppSelector} from "../../hooks/redux";
import {useLocation} from "react-router-dom";
import UserWindow from "../UI/userWindow/userWindow";

const Header:FC = () => {
    const profImg = require("../../media/prof.png")
    const viewImg = require("../../media/view.png")
    const loginImg = require("../../media/login.png")
    const articleImg = require("../../media/article.png")

    const location = useLocation()
    const {auth} = useAppSelector(state => state)

    return (

        <div className={classes.header}>
            <Logo/>
            <div className={`${classes.headerPanelBtn} ${location.pathname === "/" && classes.active}`}>
                <HeaderBtn imgPath={viewImg} name="взгляд" destination={RouteNames.VIEW}/>
                <HeaderBtn imgPath={articleImg} name="кампус" destination={RouteNames.CAMPUS}/>
                <HeaderBtn imgPath={profImg} name="лица" destination={RouteNames.FACES}/>
                <HeaderBtn imgPath={loginImg} name="оценить" destination={auth.id?RouteNames.ESTIMATE:RouteNames.LOGIN}/>
            </div>
            <UserWindow/>
        </div>
    );
};

export default Header;