import React, {FC} from 'react';
import classes from "./loginPage.module.css";
import InputField from "../../components/UI/InputField/inputField";

const LoginPage:FC = () => {
    return (
        <div className={classes.loginPage}>
            <div className={classes.loginField}>
                <h2>Вход в кабинет</h2>
                <InputField type={"email"} placeHolder={"email"}/>
                <InputField type={"password"} placeHolder={"password"}/>
            </div>
        </div>
    );
};

export default LoginPage;