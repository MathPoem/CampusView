import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import headerReducer from "./header/headerReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    header: headerReducer,
});

export type RootState = ReturnType<typeof rootReducer>