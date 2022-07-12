import React, {FC} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../../router/route";
import {useAppSelector} from "../../hooks/redux";

const AppRouter:FC= () => {
    const {isAuth} = useAppSelector(state => state.auth);
    return (
        <div>
            {isAuth ?
                <Routes>
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
                <Routes>
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