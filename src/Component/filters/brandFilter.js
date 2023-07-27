import React from 'react';
import axios from 'axios';

const url = "https://amazonapi-mjkr.onrender.com/addon";

const BrandFilter = (props) => {

    const handleBrand = (event) => {
        let categoryId = props.categoryId;
        let brandId = event.target.value;
        let brandUrl = "";
        if(brandId === ""){
            brandUrl = `${url}/${categoryId}`
        }else{
            brandUrl = `${url}/${categoryId}?brandId=${brandId}`
        }

        axios.get(brandUrl)
            .then((res) => {props.categoryPerBrand(res.data)})
    }

    return(
        <>
            <h5>Discount</h5>
            <div  onChange={handleBrand}>
                <ul>
                <li>  <label className="radio">
                    <input type="radio" name="Brand" value="4"/><b>5% </b>Off
                </label></li>
                <li>  <label className="radio">
                    <input type="radio" name="Brand" value="1"/><b>10% </b>Off
                </label></li>
                <li>  <label className="radio">
                    <input type="radio" name="Brand" value="2"/><b>20% </b>Off
                </label></li>
                <li>  <label className="radio">
                    <input type="radio" name="Brand" value="3"/><b>30% </b>Off
                </label></li>
                </ul>
            </div>
           
            <br/>
            

        </>
    )
}

export default BrandFilter