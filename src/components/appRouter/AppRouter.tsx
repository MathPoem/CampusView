import React, {FC, useEffect, useState} from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../router/route";
import {useAppSelector} from "../../hooks/redux";
import "../../App.css";
import ErrorPage from "../../pages/errorPage/errorPage";


const AppRouter: FC = () => {
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransitionStage("fadeOut");
    }, [location, displayLocation]);

    const {auth} = useAppSelector(state => state)


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
            {auth.id ?
                <Routes location={displayLocation}>
                    {privateRoutes.map(route =>
                        <Route path={route.path}
                               element={<route.element/>}
                               key={route.path}/>
                    )}
                    <Route path={'*'}
                           element={<ErrorPage/>}/>
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
                           element={<ErrorPage/>}
                    />
                </Routes>
            }
        </div>
    );
};

export default AppRouter;