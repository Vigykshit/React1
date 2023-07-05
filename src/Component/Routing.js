import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Main from './Main';
import Listing from './listing/listingLogic';
import DetailDisplay from './orderDetails/detailsLogic';

 const Routing = () =>{
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                   <Route path='/' element={<Main/>}/>
                   <Route index element={<Home/>}/>
                   <Route path='home' element={<Home/>}/>
                   <Route path='listing/:categoryId' element={<Listing/>}/>
                   <Route path='details' element={<DetailDisplay/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
 }
 export default Routing;