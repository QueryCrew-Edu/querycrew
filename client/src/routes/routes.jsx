import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LandingPage from '../components/LandingPage/LandingPage';

export default function AppRoutes() {
    return(
        <Routes>
            <Route path='' element={<LandingPage />}/>
        </Routes>
    );
}