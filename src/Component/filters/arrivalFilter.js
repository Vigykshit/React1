import React from 'react';
import axios from 'axios';

const url = "https://amazonapi-mjkr.onrender.com/addon";

const ArrivalFilter = (props) => {

    const handleArrival = (event) => {
        let categoryId = props.categoryId;
        let arrivalId = event.target.value;
        let arrivalUrl = "";
        if(arrivalId === ""){
            arrivalUrl = `${url}/${categoryId}`
        }else{
            arrivalUrl = `${url}/${categoryId}?arrivalId=${arrivalId}`
        }

        axios.get(arrivalUrl)
            .then((res) => {props.categoryPerArrival(res.data)})
    }

    return(
        <>
            <h5>New Arrivals</h5>
            <div  onChange={handleArrival}>
                <ul>
                <li>  <label className="radio">
                    <input type="radio" name="arrival" value="1"/>Last <b>30</b> Days
                </label></li>
                <li>  <label className="radio">
                    <input type="radio" name="arrival" value="2"/>Last <b>90</b> Days
                </label></li>
                
                </ul>
                <br/>
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
            </div>

        </>
    )
}

export default ArrivalFilter