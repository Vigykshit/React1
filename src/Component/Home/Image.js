import React from "react";
import './Image.css'
const Image = () =>{
    return(
        <>
            <div className="container-fluid box2">
             <div id="demo" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner ">
                <a href="#">
                <div className="carousel-item active ">
                  <img src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" alt="electronics" className="d-block" style={{width:'100%'}}></img>
                </div>
                <div className="carousel-item">
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/BAU/june/stores/3000x1200._CB603852207_.jpg" alt="furnitutre" className="d-block" style={{width:'100%'}}></img>
                </div>
                <div className="carousel-item">
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/BBS/unrec/Big-Bathroom-sale---May---Kohler-Hero_3000x1200_UnRec_1._CB587457177_.jpg" alt="furnitutre" className="d-block"  style={{width:'100%'}}>
                  </img>
                </div>
                <div className="carousel-item">
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/Vernac/2021/Gw-Hero/Mobile_tall_Hero_revision_3000x1200._CB604857279_.jpg" alt="furnitutre" className="d-block"  style={{width:'100%'}}></img>
                </div>
                <div className="carousel-item">
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/June23/EOSS/UNREC/Shoes/Shoes_3000._CB603440768_.jpg" alt="mobile" className="d-block" style={{width:'100%'}}></img>
                </div>
                </a>
              </div>
              <button className="carousel-control-prev back" type="button" data-bs-target="#demo" data-bs-slide="prev">
                 <span className="carousel-control-prev-icon cute1"></span> 
              </button>
              <button className="carousel-control-next front" type="button" data-bs-target="#demo" data-bs-slide="next">
               <span className="carousel-control-next-icon cute1"></span> 
              </button>
              </div>
        </div>
        
        </>
    )
}

export default Image;