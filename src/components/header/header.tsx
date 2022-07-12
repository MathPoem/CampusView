import React, {FC} from 'react';
import classes from "./header.module.css";
import Logo from "../Logo/Logo";
import {RouteNames} from "../../router/route";
import HeaderBtn from "./headerBtn";
import {useAppSelector} from "../../hooks/redux";

const Header:FC = () => {
    const profImg = require("../../media/prof.png")
    const viewImg = require("../../media/view.png")
    const loginImg = require("../../media/login.png")
    const articleImg = require("../../media/article.png")

    const {isAuth} = useAppSelector(state => state.auth)
    const {isActive} = useAppSelector(state => state.header)

    return (

        <div className={classes.header}>
            <Logo/>
            <div className={`${classes.headerPanelBtn} ${isActive && classes.active}`}>
                <HeaderBtn imgPath={viewImg} name="взгляд" destination={RouteNames.VIEW}/>
                <HeaderBtn imgPath={articleImg} name="кампус" destination={RouteNames.CAMPUS}/>
                <HeaderBtn imgPath={profImg} name="лица" destination={RouteNames.FACES}/>
                <HeaderBtn imgPath={loginImg} name="кабинет" destination={isAuth ? RouteNames.SELF : RouteNames.LOGIN}/>
            </div>
        </div>
    );
};

export default Header;