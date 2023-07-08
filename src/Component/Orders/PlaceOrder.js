import React from "react";
import { useParams } from "react-router-dom";
const PlaceOrder = () => {

    let params = useParams();
    

    return(
        <>
        <div className="container">
            <hr/>
            <div className="panel panel-primary">
                <h3>Order For{Params.restName}</h3>
            </div>
        </div>
        </>
    )
}