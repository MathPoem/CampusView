import React, {FC, useEffect, useState} from 'react';
import classes from "./loginPage.module.css";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../router/route";
import {useSignInMutation} from "../../services/UserService";
import { useAppSelector} from "../../hooks/redux";


const LoginPage:FC = () => {
    const navigation = useNavigate()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const ImgLog = require("../../media/log2.png")
    const [signIn] = useSignInMutation()
    const {auth} = useAppSelector(state => state)
    const navigate = useNavigate()
    const sign = async () => {
        await signIn({password:password, username:username})
    }

    useEffect(() => {
        if (auth.id) {
            navigate(RouteNames.ESTIMATE)
        }
    }, [auth.id, navigate])


    return (
        <div className={classes.loginPage}>
            <img className={classes.imgLog} src={ImgLog} alt="войдите"/>
            <input className={classes.inputLogin} placeholder="username" value={username} onChange={e=>setUsername(e.target.value)}/>
            <input className={classes.inputLogin} placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button className={classes.buttonLogin} onClick={sign}>войти</button>
            или <b onClick={() => navigation(RouteNames.REGISTER)}>зарегистрироваться</b>
        </div>
    );
};

export default LoginPage;