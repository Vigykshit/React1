import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrder';
import Header from '../Header';

const url = "https://amazonapi-mjkr.onrender.com/orders";

const ViewOrder = () => {

    const [orders,setOrder] = useState();
    // let sessionData = sessionStorage.getItem('orders');
    // let data = JSON.parse(sessionData)

    useEffect(() => {
        axios.get(url).then((res) => {setOrder(res.data)})
    })

    return(
        <>
            <Header/> 
            <DisplayOrder orderData={orders}/>
        </>

    )

}

export default ViewOrder;