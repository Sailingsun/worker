import React, {useRef} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import App from './App';
import Projection from './Projection';

const MainRoutes = (props) => {
    const myWorker = useRef(new SharedWorker(new URL('./sharedWorker.worker.js', import.meta.url)));
    
    return (
        <BrowserRouter {...props}>
            <Routes>
                <Route exact path='/' element={<App myWorker={myWorker} />}/>
                <Route exact path='/projection' element={<Projection myWorker={myWorker} />}/>
                <Route element={<Navigate to='/' replace/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoutes;