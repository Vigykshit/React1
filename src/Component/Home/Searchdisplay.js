import React from "react";
import {Link} from 'react-router-dom';
const Searchdisplay = (props) =>{
    
        const Category = ({categoryData}) => {
            if(categoryData){
                return categoryData.map((item) => {
                    return(
    <Link to="/" key ={item.category_id}>
        
        
        <>  
            <div className="container1"> 
               {item.content}
              </div>
              <div className="container2"> 
                <img src={item.image}  alt={item.category} />
              </div> 
              <div className="container3 godown1">
               <p> Shop Now</p> 
              </div>
             
        </>
               
                
    // </Link>
         )
     }) 
       
 }
}
return(
    <div className="container">
        {Category(props)} 
    </div>
)
}

export default Searchdisplay;