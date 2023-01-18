import React, {useEffect, useState} from "react";
import './styles/App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import NotFound from "./pages/NotFound";
import AppRouter from "./components/AppRouter";
import {LogContext} from "./context";

function App() {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('isLogged')) {
            setIsLogged(true);
        }
    }, [])

    return (
        <LogContext.Provider value ={{
            isLogged,
            setIsLogged
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </LogContext.Provider>
    )
}

export default App;
