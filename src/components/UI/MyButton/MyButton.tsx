import React, {FC} from 'react';
import classes from './MyButton.module.css';
import {useLocation} from "react-router-dom";

interface MyButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    destination?: string;
}

const MyButton:FC<MyButtonProps> = ({children, onClick, destination}) => {
    const location = useLocation();
    return (
        <button className={`${classes.MyBtn} ${location.pathname === destination && classes.active}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;