import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Post from "../pages/Post";
import {publicRoutes, privateRoutes} from "../router/routes";
import {LogContext} from "../context";

const AppRouter = () => {
    const {isLogged, setIsLogged} = useContext(LogContext);

    return (
        isLogged
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={<route.element/>}
                        path={route.path}
                        key={route.path}
                    />
                )}
            </Routes>
            : <Routes>{
                publicRoutes.map(route =>
                    <Route
                        element={<route.element/>}
                        path={route.path}
                        key={route.path}
                    />
                )}
            </Routes>
    );
};

export default AppRouter;