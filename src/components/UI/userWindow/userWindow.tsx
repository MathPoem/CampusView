import React, {useState} from 'react';
import classes from "./userWindow.module.css"
import { useAppSelector} from "../../../hooks/redux";
import LoginVar from "./loginVar";
import HomeVar from "./homeVar";

const UserWindow = () => {
    const {auth} = useAppSelector(state => state)
    const [stateCtx, setStateCtx] = useState<boolean>(false)

    return (
        <div onMouseOut={() => setStateCtx(false)} onMouseOver={() => setStateCtx(true)}>
            <div className={classes.userWindow}/>
            <div className={`${classes.context} ${stateCtx && classes.active}`}
            >
                <div className={classes.contextContent}>
                    {auth.id?
                        <HomeVar/>
                        :
                        <LoginVar/>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserWindow;