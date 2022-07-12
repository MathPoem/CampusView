import React from "react";
import HomePage from "../pages/home/homePage";
import selfPage from "../pages/self/selfPage";
import viewPage from "../pages/view/viewPage";
import campusPage from "../pages/campus/campusPage";
import facesPage from "../pages/faces/facesPage";
import LoginPage from "../pages/login/loginPage";


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
    SELF = "/self"
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.HOME, exact: true, element: HomePage},
    {path: RouteNames.LOGIN, exact: true, element: LoginPage},
    {path: RouteNames.VIEW, exact: true, element: viewPage},
    {path: RouteNames.CAMPUS, exact: true, element: campusPage},
    {path: RouteNames.FACES, exact: true, element: facesPage}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.HOME, exact: true, element: HomePage},
    {path: RouteNames.SELF, exact: true, element: selfPage},
    {path: RouteNames.VIEW, exact: true, element: viewPage},
    {path: RouteNames.CAMPUS, exact: true, element: campusPage},
    {path: RouteNames.FACES, exact: true, element: facesPage}
]
