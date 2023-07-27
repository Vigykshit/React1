import React,{useState,useEffect} from "react";
import './details.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useSearchParams, useNavigate} from 'react-router-dom';
import Header from "../Header";
const base_url ="https://amazonapi-mjkr.onrender.com";

const DetailDisplay = () => {

 let navigate = useNavigate()   
let [searchParams] = useSearchParams()
let [itemDetails,setitemDetails] = useState()
// let [categoryId] = useState(sessionStorage.getItem('categoryId'))



useEffect(() => {
  let productId = searchParams.getAll('productId')
  const itemDetail = async() => {
     const idata =await axios.get(`${base_url}/itemdetail?productId=${productId}`);
     setitemDetails(idata.data[0])
  }
   
      itemDetail()
  
},[searchParams]);
const proceed = () => {
  navigate(`/placeOrder/${itemDetails.product_name}`)
}

   const renderDetails = () => {
      if (itemDetails)
      return (
        <>
        <Header/>
        <Link to ="/orders">
       <p className="word">{itemDetails.product_name}</p></Link>
       <hr/>
        <div className="fullpage">
        
            <div className="one">
           
                <div id="img" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#img" data-bs-slide-to="0" className="active"></button>
                      <button type="button" data-bs-target="#img" data-bs-slide-to="1"></button>
                      <button type="button" data-bs-target="#img" data-bs-slide-to="2"></button>
                      <button type="button" data-bs-target="#img" data-bs-slide-to="3"></button>
                      <button type="button" data-bs-target="#img" data-bs-slide-to="4"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={itemDetails.image_Gallery[0]} alt="watch" className="d-block" style={{width:"100%"}}/>
                      </div>
                      <div className="carousel-item">
                        <img src={itemDetails.image_Gallery[1]} alt="watch" className="d-block" style={{width:"100%"}}/>
                      </div>
                      <div className="carousel-item">
                        <img src={itemDetails.image_Gallery[2]} alt="watch" className="d-block" style={{width:"100%"}}/>
                      </div>
                      <div className="carousel-item">
                        <img src={itemDetails.image_Gallery[3]} alt="watch" className="d-block" style={{width:"100%"}}/>
                      </div>
                      <div className="carousel-item">
                        <img src={itemDetails.image_Gallery[4]} alt="watch" className="d-block" style={{width:"100%"}}/>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="main" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="main" data-bs-slide="next">
                      <span className="carousel-control-next-icon"></span>
                    </button>
                  </div>
            </div>
      

          <div className="two">
                <div className="two1">
                    <h1>Deal of the day</h1>
                    <h2>{itemDetails.off}</h2>

                    <h5><sup>₹</sup>{itemDetails.cost}.00</h5>
                    <p>M.R.P.:<del><sup>₹</sup>{itemDetails.old_price}.00 </del></p>
                    <p>{itemDetails.ratings}</p>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <hr/>
                  <table>
                    <tr>
                        <th style={{width:"60%"}}></th>
                        <th style={{width:"40%"}}></th>
                    </tr>
                    <tr>
                        <td className="one8">Brand</td>
                        <td>{itemDetails.brand}</td>
                    </tr>
                    <tr>
                        <td className="one8">Model Name</td>
                        <td>{itemDetails.Model_Name}</td>
                    </tr>
                    <tr>
                        <td className="one8">Style</td>
                        <td>{itemDetails.style}</td>
                    </tr>
                    <tr>
                        <td className="one8">Color</td>
                        <td>{itemDetails.color}</td>
                    </tr>
                    <tr>
                        <td className="one8">Screen Size</td>
                        <td>{itemDetails.display} </td>
                    </tr>
                  </table>
                  <hr/>
                  <div className="one4">
                     <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarmV3/free-shipping._CB592228481_.jpg" alt="delivery" />
                    
                       
                    <p> Free Delivery</p>
                     <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarmV3/cod._CB592304299_.jpg" alt="delivery" />
                     <p>Pay on Delivery</p>
                     <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarmV3/returns._CB592228481_.jpg" alt="delivery" />
                     <p>7 Day Replacement</p>
                     <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarmV3/warranty._CB592228481_.jpg" alt="delivery" />
                     <p>12 Month warranty</p>
                 </div>
                 <hr/>
                <p className="one5">About this item</p> 
                    {itemDetails.about}
            </div>
         
         
            <div className="three">
                <p className="one6"><sup>₹</sup>{itemDetails.cost}<sup>00</sup></p>
                <p>Free Delivery</p>

              <span className="one7">In Stock</span>
              <p> Sold by <u>{itemDetails.brand}</u> and Fulfilled by Amazon.</p>
              <h5>Add a protection plan</h5>
              
               <input type="checkbox"/>1 Year Extended Warranty for ₹59.00
               <br/>
               <input type="checkbox"/>1 Year Extended Warranty for ₹99.00 
               
               {/* <button className="btn btn-primary one9">Add to Cart</button> */}
               <button className="btn btn-info one9" onClick={proceed}>Buy Now</button>
               <hr/>
                <input type="checkbox" className="rado"/>Add Gift Option
               <hr/>

            </div>
       
       <hr/>
</div>
           
       </>
        
     
       )
       }
            return(
                <>
               <div classNameName="main">
                  {renderDetails()}
                
                </div>
                
               
           </>
            )
       
     }
    
    

export default DetailDisplay;