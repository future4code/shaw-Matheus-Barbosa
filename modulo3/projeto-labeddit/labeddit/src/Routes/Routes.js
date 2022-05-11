import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateLoginPage from "../components/CreateLoginPage";
import FeedPage from "../components/FeedPage";
import PaginaLogin from "../components/PaginaLogin";




function Telas (){

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<PaginaLogin/>}/>
                <Route path='Feed' element={<FeedPage/>}/>
                <Route path='CreateLogin' elemnent={<CreateLoginPage/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default Telas