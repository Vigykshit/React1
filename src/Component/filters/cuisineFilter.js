import React from 'react';
import axios from 'axios';

const url = "https://amazonapi-mjkr.onrender.com/addon";

const CuisineFilter = (props) => {

    const handleFilter = (event) => {
        let categoryId = props.categoryId;
        let filterId = event.target.value;
        let filterUrl = "";
        if(filterId === ""){
            filterUrl = `${url}/${categoryId}`
        }else{
            filterUrl = `${url}/${categoryId}?filterId=${filterId}`
        }

        axios.get(filterUrl)
            .then((res) => {props.categoryPerFilter(res.data)})
    }

    return(
        <>
            <h5>Delivery Day</h5>
            <div  onChange={handleFilter}>
                <ul>
                <li>  <label className="radio">
                    <input type="radio" name="cuisine" value="1"/>Get it by<b>Tomorrow</b>
                </label></li>
                <li>  <label className="radio">
                    <input type="radio" name="cuisine" value="2"/>Get it in <b>2 Days</b>
                </label></li>
                
                </ul>
            </div>
<br/>
        </>
    )
}

export default CuisineFilter