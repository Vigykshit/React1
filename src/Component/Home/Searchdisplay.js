import React from "react";
import {Link} from 'react-router-dom';
import './Search.css';

const Searchdisplay = (props) =>{
    
        const Category = ({categoryData}) => {
            if(categoryData){
                return categoryData.map((item) => {
                    return(
    <Link to={`/listing/${item.category_id}`}>
        <>
        
          <div className="bear">
              <div className="container1"> 
               {item.content}
              </div>
              <div className="container2"> 
                <img src={item.image}  alt={item.category} />
              </div> 
              <div className="container3 godown1">
               <p> Shop Now</p> 
              </div>
          </div>

        </>
               
                
    </Link>
         )
     }) 
       
 }
}
return(
    <>
   
    <div className="dotbox">
        {Category(props)} 
    </div>
    </>
)

   
}

export default Searchdisplay;