import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import headerReducer from "./header/headerReducer";
import {userAPI} from "../../services/UserService";
import {academicAPI} from "../../services/AcademicService";
import selectReducer from "../reducers/selector/selctorReducer"
export const rootReducer = combineReducers({
    auth: authReducer,
    header: headerReducer,
    selector: selectReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [academicAPI.reducerPath]: academicAPI.reducer
});

export type RootState = ReturnType<typeof rootReducer>