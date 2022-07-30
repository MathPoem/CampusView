import React, {FC} from 'react';
import classes from "./inputField.module.css"

interface InputFieldProps {
    children?: React.ReactNode
    placeHolder: string
    type: string

}

const InputField:FC<InputFieldProps> = ({children, type, placeHolder}) => {
    return (
        <input className={classes.inField} type={type} placeholder={placeHolder} required={true}>

        </input>
    );
};

export default InputField;