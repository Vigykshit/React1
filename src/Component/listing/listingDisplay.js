import React from 'react';
import {Link} from 'react-router-dom';

const ListingDisplay= (props) => {

    const renderData =({listData}) => {
        if(listData){
            if(listData.length> 0){
                return listData.map((item) =>{
                     return(
                       
               <div className='watchrate' key={item.product_id}> 
               <img src={item.Image} alt={item.product_name} className="menu22"/>
               <div className="watchmenu">
                <Link to ={`/itemdetail?productId=${item.product_id}`}> 
               <p className="watch1">{item.product_name}</p>  </Link> 
              
               <i className="fa fa-star checked"></i>
               <i className="fa fa-star checked"></i>
               <i className="fa fa-star checked"></i>
               <i className="fa fa-star checked"></i>
               <i className="fa fa-star"></i>
               <div className="small3">
                 <p>Deal of the day</p>
                 <h5><sup>₹</sup>{item.Price}</h5>
                 <del><sup>₹</sup>{item.OldPrice}</del>(70%off)
               </div>
              
               <div className='star1'>
                <p>{item.Color}</p>
               </div>
                <div className='star'>
                <p><h4 className="star2">Brand</h4>:{item.Company}</p>
               </div>
               <p className='content'> Get it by Friday,
                 FREE Delivery by Amazon</p>
             </div>
             
             
             
             
                        </div>
                       
                     )
                })
                
            }else{
                return(
                    <h2>Sorry For Inconvience</h2>
                )
            }
        }else{
            return(
                <div>
                    <h2>Loading</h2>
                    <img src="/Images/loader.gif" alt ="loader"/>
                </div>
            )
        }
    }
return(
   <div className='fullview'>
      {renderData(props)}
   </div>
)
}  

export default ListingDisplay;