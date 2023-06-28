import React,{useState,useEffect} from "react";
import './Search.css';
import Searchdisplay from './Searchdisplay';

const base_url = "https://amazonapi-jc23.onrender.com";

const Search = () => {

    const [categoryType,setCategoryType] = useState();

    useEffect(() => {
        fetch(`${base_url}/category`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setCategoryType(data)
        })
    },[])

    return(
        <>
        
             
              <Searchdisplay categoryData={categoryType}/>
            
       
        
            
           
           
        </>
    )
 }


 export default Search;