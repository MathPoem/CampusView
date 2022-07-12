import React, {FC} from 'react';
import classes from './MyButton.module.css';

interface MyButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const MyButton:FC<MyButtonProps> = ({children, onClick}) => {
    return (
        <button className={classes.MyBtn} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;