import React, {useState} from 'react';
import classes from "./estimate.module.css"
import {useActivateMutation} from "../../services/authService";
import {useAppSelector} from "../../hooks/redux";
import ProgramTableForEstimate from "../../components/programTableForEstimate/programTableForEstimate";


const Estimate = () => {
    const {confirmed} = useAppSelector(state => state.auth)
    const ImgMail = require("../../media/mailbox_pic_background 1.png")
    const [keyActivate, setKeyActivate] = useState<string>("")

    const [activate] = useActivateMutation()

    return (
        <div className={classes.estimatePage}>
            {confirmed?
                <ProgramTableForEstimate/>
            :
                <div className={classes.imgBlock}>
                    <img className={classes.img} src={ImgMail} alt="Проверьте почту"/>
                    <div className={classes.txtImg}>на указанную почту было отправлено <mark>сообщение с ключом</mark></div>
                    <input className={classes.In} value={keyActivate} onChange={(e) => setKeyActivate(e.target.value)} placeholder={"key"}/>
                    <button className={classes.buttonEstimate} onClick={() => activate({key: keyActivate})}>отправить</button>
                </div>

            }
        </div>
    );
};

export default Estimate;