import React,{useState,useEffect} from "react";
import './details.css';
import axios from 'axios';
import {Link} from 'react-dom';
import { useParams, useSearchParams} from 'react-router-dom';

const base_url ="https://amazonapi-mjkr.onrender.com";

const DetailDisplay = () =>{
    


    let[searchParams] = useSearchParams()
    let[productDetails,setproductDetails] = useState()
    let Id = searchParams.getAll('_id');
     const productDetail = async() => {
        const rdata = await axios.get(`${base_url}/itemdetail/${Id}`);
        setproductDetails(rdata.data[0])

     }
     useEffect(()=>{
        productDetails(
           
        )
     },[])

     const renderDetails = () =>{
        if(productDetail){
            return(
                <>
                
                <h1>hello Brother</h1>
    </>
            )
       
     }
    
    
}
return(
  <>
  
    {renderDetails()}
   </>
)
}
  export default DetailDisplay