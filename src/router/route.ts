import React from "react";
import HomePage from "../pages/home/homePage";
import selfPage from "../pages/self/selfPage";
import viewPage from "../pages/view/viewPage";
import campusPage from "../pages/campus/campusPage";
import facesPage from "../pages/faces/facesPage";
import LoginPage from "../pages/login/loginPage";
import programPage from "../pages/programPage/programPage";
import estimate from "../pages/estimate/estimate";
import registerPage from "../pages/register/registerPage";


export interface IRoute {
    path: string;
    element: React.ElementType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = "/login",
    VIEW = "/view",
    CAMPUS = "/campus",
    FACES = "/faces",
    HOME = "/",
    SELF = "/self",
    PROGRAM = "/campus/:programID",
    ESTIMATE = "/estimate",
    REGISTER = "/register"
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.HOME, exact: true, element: HomePage},
    {path: RouteNames.LOGIN, exact: true, element: LoginPage},
    {path: RouteNames.VIEW, exact: true, element: viewPage},
    {path: RouteNames.CAMPUS, exact: true, element: campusPage},
    {path: RouteNames.FACES, exact: true, element: facesPage},
    {path: RouteNames.PROGRAM, exact: true, element: programPage},
    {path: RouteNames.REGISTER, exact: true, element: registerPage},

]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.HOME, exact: true, element: HomePage},
    {path: RouteNames.SELF, exact: true, element: selfPage},
    {path: RouteNames.VIEW, exact: true, element: viewPage},
    {path: RouteNames.CAMPUS, exact: true, element: campusPage},
    {path: RouteNames.FACES, exact: true, element: facesPage},
    {path: RouteNames.ESTIMATE, exact: true, element: estimate},
    {path: RouteNames.LOGIN, exact: true, element: LoginPage},
    {path: RouteNames.PROGRAM, exact: true, element: programPage},
]
