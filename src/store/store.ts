import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducers/rootReducer";
import {userAPI} from "../services/UserService";
import {academicAPI} from "../services/AcademicService";

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().
            concat(userAPI.middleware).
            concat(academicAPI.middleware)
    })
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]