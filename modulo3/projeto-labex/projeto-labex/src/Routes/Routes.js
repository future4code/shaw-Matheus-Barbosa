import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from "../Pages/HomePage";
import AdminHomePage from "../Pages/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage";
import ListTripsPage from "../Pages/ListTripsPage";
import LoginPage from "../Pages/LoginPage";
import TripDetailsPage from "../Pages/TripDetailsPage";


function Telas (){

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="adminPage" element={<AdminHomePage/>}/>
                <Route path="applicationPage" element={<ApplicationFormPage/>}/>
                <Route path="createTrip" element={<CreateTripPage/>}/>
                <Route path="listTrips" element={<ListTripsPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="tripDetails" element={<TripDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Telas