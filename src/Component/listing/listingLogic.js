import React,{useState,useEffect} from 'react';
import './listing.css';
import {useParams} from 'react-router-dom';
import ListingDisplay from './listingDisplay';
import axios from 'axios';

const base_url = "https://amazonapi-jc23.onrender.com";

const ListingLogic = () => {
    let params = useParams();

    const[categoryList,setCategoryList] = useState();
    
    useEffect(() =>{
        let categoryid =params.categoryId;
          axios.get(`${base_url}/item?categoryId=${categoryid}`)
         .then((res) => {
            setCategoryList(res.data)
         })
        },[])
    return(
        <>
        <div class="raw1">
        <div className='fullpage'>
            <div className='taglist'></div>
           

            <ListingDisplay listData={categoryList}/>
          </div>
        
        </div>

        </>
    )
}

export default ListingLogic;