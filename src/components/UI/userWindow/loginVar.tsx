import React, {FC} from 'react';
import classes from "./loginVar.module.css"
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../../router/route";

const LoginVar:FC = () => {
    const navigate = useNavigate()

    return (
        <div className={classes.general}>
            еще не с <mark>нами?</mark>
            <div className={classes.buttonArea}>
                <button className={classes.buttonLog} onClick={() => navigate(RouteNames.REGISTER)}>зарегистрируйтесь</button>
                <div className={classes.or}>или</div>
                <button className={classes.buttonLog} onClick={() => navigate(RouteNames.LOGIN)}>войдите</button>
            </div>

        </div>
    );
};

export default LoginVar;