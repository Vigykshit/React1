import React,{useState,useEffect} from 'react';
import './listing.css';
import {useParams} from 'react-router-dom';
import Listing from './listingDisplay';
import axios from 'axios';

const base_url = "https://amazonapi-jc23.onrender.com/category";

const ListingLogic = () => {
    return(
        <>
        <h2>No brother</h2>
        <ListingDisplay/></>
    )
}

export default ListingLogic;