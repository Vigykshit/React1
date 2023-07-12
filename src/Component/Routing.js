import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Main from './Main';
import Listing from './listing/listingLogic';
import DetailDisplay from './orderDetails/detailsLogic';
import PlaceOrder from './Orders/PlaceOrder';
import ViewOrder from './Orders/ViewOrder';
import Login from './login/loginComponent';
import Register from './login/registerComponent';

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
                   <Route path='itemdetail' element={<DetailDisplay/>}/>
                   <Route path='placeorder/:product_name' element={<PlaceOrder/>}/>
                   <Route path='viewOrder' element={<ViewOrder/>}/>
                   <Route path="login" element={<Login/>}/>
                   <Route path="register" element={<Register/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
 }
 export default Routing;