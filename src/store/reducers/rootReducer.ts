import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import headerReducer from "./header/headerReducer";
import ctxReducer from "./contextMenu/contextReducer"
import {userAPI} from "../../services/UserService";
import {academicAPI} from "../../services/AcademicService";
import selectReducer from "../reducers/selector/selctorReducer"
import selectRegisterReducer from "../reducers/selectorRegister/selctorRegisterReducer"
import registerReducer from "../reducers/register/registerReducer"
import courseCardReducer from "./courseCard/courseCardReducer";
import {authApi} from "../../services/authService";
import estimateReducer from "./estimate/estimateReducer";
export const rootReducer = combineReducers({
    estimate: estimateReducer,
    auth: authReducer,
    header: headerReducer,
    selector: selectReducer,
    selectorRegister: selectRegisterReducer,
    register: registerReducer,
    courseCard: courseCardReducer,
    ctxMenu: ctxReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [academicAPI.reducerPath]: academicAPI.reducer,
    [authApi.reducerPath]: authApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>