import React from 'react';
import axios from 'axios';

const url = "https://amazonapi-mjkr.onrender.com/addon";

const CostFilter = (props) => {

    const handleFilter = (event) => {
        let categoryId = props.categoryId;
        let cost = (event.target.value).split('-')
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl = "";
        if(event.target.value === ""){
            costUrl = `${url}/${categoryId}`
        }else{
            costUrl = `${url}/${categoryId}?lcost=${lcost}&&hcost=${hcost}`
        }

        axios.get(costUrl)
            .then((res) => {props.categoryPerCost(res.data)})
    }

    return(
        <>
        <h5>Price</h5>
            <div  onChange={handleFilter}>
                <ul>
                <li>  <label className="radio">
                    <input type="radio" name="filter" value="100-499"/>Under <b>₹</b>499
                </label></li>
                <li>  <label className="radio">
                    <input type="radio" name="filter" value="500-1499"/><b>₹</b>500 - <b>₹</b>1499
                </label></li>
                <li>  <label className="radio">
                    <input type="radio" name="filter" value="1500-2499"/><b>₹</b>1500 - <b>₹</b>2499
                </label></li>
                <li>  <label className="radio">
                    <input type="radio" name="filter" value="2500-3499"/><b>₹</b>2500 - <b>₹</b>3499
                </label></li>
                <li>  <label className="radio">
                    <input type="radio" name="filter" value="3500-10000"/><b>₹</b>3500 - <b>₹</b>10000
                </label></li>
                <li>  <label className="radio">
                    <input type="radio" name="filter" value="10000-1000000"/>Above <b>₹</b>10000
                </label></li>
                </ul>
            </div> 
<br/>
           

        </>
    )
}

export default CostFilter