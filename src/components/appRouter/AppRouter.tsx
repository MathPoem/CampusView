import React, {FC, useEffect, useState} from 'react';
import {Routes, Route, Navigate, useLocation} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../../router/route";
import {useAppSelector} from "../../hooks/redux";
import "../../App.css";

const AppRouter:FC= () => {
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransitionStage("fadeOut");
    }, [location, displayLocation]);


    const {isAuth} = useAppSelector(state => state.auth);
    return (
        <div
            className={`${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                    setTransitionStage("fadeIn");
                    setDisplayLocation(location);
                }
            }}
        >
            {isAuth ?
                <Routes location={displayLocation}>
                    {privateRoutes.map(route =>
                        <Route path={route.path}
                               element={<route.element/>}
                               key={route.path}
                        />
                    )}
                    <Route path={'*'}
                           element={<Navigate replace to={RouteNames.HOME}/>}
                    />
                </Routes>
                :
                <Routes location={displayLocation}>

                    {publicRoutes.map(route =>
                        <Route path={route.path}
                               element={<route.element/>}
                               key={route.path}
                        />
                    )}
                    <Route path={'*'}
                           element={<Navigate replace to={RouteNames.HOME}/>}
                    />
                </Routes>
            }
        </div>
    );
};

export default AppRouter;