import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Homepage from "../Views/Homepage"
import Login from "../Views/Login"
import Movies from '../Views/Movies'
import {ProtectedRoute} from "../components/ProtectedRoute";

const Router = () => (
        <Routes>
            <Route path="/" element={
                <ProtectedRoute>
                    <Homepage/>
                </ProtectedRoute>
            }/>
            <Route path="login" element={<Login/>}/>
            <Route path="movies-list"
                   element={
                       <ProtectedRoute>
                           <Movies/>
                       </ProtectedRoute>
                   }
            />
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
);

export default Router;