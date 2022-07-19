import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import App from './App';
import Projection from './Projection';

const MainRoutes = (props) => (
    <BrowserRouter {...props}>
        <Routes>
            <Route exact path='/' element={<App />} />
            <Route exact path='/projection' element={<Projection />} />
            <Route element={<Navigate to='/' replace />} />
        </Routes>
    </BrowserRouter>
);

export default MainRoutes;