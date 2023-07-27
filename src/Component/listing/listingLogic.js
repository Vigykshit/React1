import React,{useState,useEffect} from 'react';
import './listing.css';
import {useParams} from 'react-router-dom';
import ListingDisplay from './listingDisplay';
import axios from 'axios'; 
import CostFilter from '../filters/costFilter';
import CuisineFilter from '../filters/cuisineFilter';
import BrandFilter from '../filters/brandFilter';
import ArrivalFilter from '../filters/arrivalFilter';
import Header from '../Header';


const base_url = "https://amazonapi-mjkr.onrender.com";

const ListingLogic = () => {
    let params = useParams();

    const [catList,setCatList] = useState();
    let categoryid = params.categoryId;
    useEffect(() =>{
      
        sessionStorage.setItem('categoryId' ,categoryid)
          axios.get(`${base_url}/item?categoryId=${categoryid}`)
         .then((res) => {
            setCatList(res.data)
         })
        },[categoryid])

        const setDataPerFilter = (data) => {
          setCatList(data)
        }

    return(
        <>
        <Header/>
        <div className="raw1">
        <div className='fullpage'>
            <div className='taglist'>
            {/* <h5>Delivery Day</h5>
             <ul>
             <input type="radio"/>Get it by Tomorrow
             <br/>
             <input type="radio"/>Get it in 2 Days
             </ul>
             <h5>Customer Review</h5>
             <ul>
              <li><span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              & Up</li>
                
              <li><span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              & Up</li>
              <li><span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              & Up</li>
              <li><span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              & Up</li>
             </ul>
            <br/>
            <h5>Price</h5>
            <ul><a href="#">
              <li>Under ₹2000</li>
              <li>₹1000-₹1500</li>
              <li>₹1500-₹2500</li>
              <li>₹2500-₹4500</li>
              <li>Above ₹4500</li></a>
            </ul>
            
          <h5>New Arrivals</h5>
          <ul><a href="#">
            <li>Last 30 days</li>
            <li>Last 90 days</li></a>
          </ul>
          <h5>Discount</h5>
          <ul><a href="#">
            <li>10% Off or more</li>
            <li>25% Off or more</li>
            <li>35% Off or more</li>
            <li>50% Off or more</li>
            <li>70% Off or more</li></a>
          </ul> */}
                       <CuisineFilter categoryId={categoryid}
                        categoryPerFilter={(data) => {setDataPerFilter(data)}}/>
                        <CostFilter categoryId={categoryid}
                        categoryPerCost={(data) => {setDataPerFilter(data)}}/>
                         <BrandFilter categoryId={categoryid}
                        categoryPerBrand={(data) => {setDataPerFilter(data)}}/>
                          <ArrivalFilter categoryId={categoryid}
                        categoryPerArrival={(data) => {setDataPerFilter(data)}}/>
            </div>
           

            <ListingDisplay listData={catList}/>
          </div>
        
        </div>

        </>
    )
}

export default ListingLogic;