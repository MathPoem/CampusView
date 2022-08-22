import React, {FC} from 'react';
import classes from "./Selector.module.css"
import {IProgram, ISchool, IUniversity} from "../../../models/IAcademic";

interface SelectorProps {
    placeholder?: string
    callback: (id:number) => void
    open: boolean
    active: boolean
    setOpen: (value: boolean) => void
    value: string
    setValue: (value:string) => void
    slice?: IUniversity[] | ISchool[] | IProgram[]
}

const Selector: FC<SelectorProps> = ({placeholder, callback, open, active, setOpen, value, setValue, slice}) => {
    const clickFuncBtn = (value:string, id:number) => {
        setOpen(false)
        setValue(value)
        callback(id)
    }
    const clickFuncIn = (e:React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.stopPropagation()
        setOpen(true)
    }
    return (
        <div className={classes.selector}>
            <input className={`${classes.inputField} ${open && slice && classes.active}`}
                   type="text"
                   placeholder={placeholder}
                   value={value}
                   onChange={(event) => setValue(event.target.value)}
                   onClick={clickFuncIn}
                   disabled={active}

            />
            <div className={`${classes.inputChoiceField} ${open && slice && classes.active}`}>
                {open && slice && slice.map(university =>
                    <button className={classes.inputBtn}
                            key={university.id}
                            onClick={() => clickFuncBtn(university.name, university.id)}
                    >{university.name}</button>
                )}
            </div>
        </div>
    );
};

export default Selector;