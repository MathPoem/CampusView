import React, {FC, useEffect} from 'react';
import classes from "./registerPage.module.css"
import SelectorFieldRegister from "../../components/UI/selectorRegister/SelectorFieldRegister";
import {RouteNames} from "../../router/route";
import {useNavigate} from "react-router-dom";
import {useSignUpMutation} from "../../services/UserService";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {registerSlice} from "../../store/reducers/register/registerReducer";
import {selectRegisterSlice} from "../../store/reducers/selectorRegister/selctorRegisterReducer";

const RegisterPage:FC = () => {
    const navigation = useNavigate()

    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.register)
    const {status} = useAppSelector(state => state.register)
    const {setPassword, setEmail, setUsername} = registerSlice.actions

    const {allClose} = selectRegisterSlice.actions

    const [signUp] = useSignUpMutation()

    useEffect(()=> {
        if (status) navigation(RouteNames.LOGIN)
    }, [status, navigation])

    const checkFn = () => {
        return user.email && user.username && user.password && user.program && user.univ
    }

    return (
        <div className={classes.register} onClick={() => dispatch(allClose())}>
                   <div className={classes.txtBlock}>Присоединяйся к сообщетву <mark>студентов и
                    преподавателей,</mark> заинтересованных в повышении качества образования</div>
                    <input className={classes.inputRegister} value={user.username} placeholder="имя в системе" onChange={(e) => dispatch(setUsername(e.target.value))}/>
                    <input className={classes.inputRegister} value={user.email} placeholder="корпоративный email" onChange={(e) => dispatch(setEmail(e.target.value))}/>
                    <input className={classes.inputRegister} value={user.password} placeholder="пароль" onChange={(e) => dispatch(setPassword(e.target.value))}/>
                    <SelectorFieldRegister/>
                    <button disabled={!checkFn()} className={`${classes.buttonRegister} ${checkFn() && classes.active}`} onClick={() => signUp(user)}>зарегистрировать</button>
                    или <b onClick={() => navigation(RouteNames.LOGIN)}>войдите</b>
        </div>
    );
};

export default RegisterPage;