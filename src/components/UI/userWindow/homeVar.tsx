import React, {FC} from 'react';
import classes from "./homeVar.module.css"
import {useLogoutMutation} from "../../../services/authService";
import {useAppSelector} from "../../../hooks/redux";

const HomeVar: FC = () => {
    const [logout] = useLogoutMutation()
    const {username, email, confirmed} = useAppSelector(state => state.auth)

    return (
        <div className={classes.homeVar}>
            <div className={classes.txtBlock}>
                <div className={classes.txtHomeVar}>{username}</div>
                <div className={classes.txtHomeVar}>{email} {!confirmed&&`нужно подтвердить`}</div>
            </div>
            <button onClick={() => logout("")} className={classes.buttonHome}>выйти</button>
        </div>
    );
};

export default HomeVar;