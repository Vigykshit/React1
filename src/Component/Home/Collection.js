import React from "react";
import './Collection.css'

const Collection = () =>{
    return(
        <>
        <div className='container-fluid drag'>
          <div className="container-fluid white">
              <a href="">
                <p>Up to 60% off | Curated furniture picks for your home</p>
                <img src="https://m.media-amazon.com/images/I/71RpTYfbRiL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                <img src="https://m.media-amazon.com/images/I/81uJOXAfODL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                <img src="https://m.media-amazon.com/images/I/71Ar15Ki1jL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                <img src="https://m.media-amazon.com/images/I/61AVMkuN+BL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                <img src="https://m.media-amazon.com/images/I/51eYerc4PRS._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                <img src="https://m.media-amazon.com/images/I/61Ulpys6xML._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                <img src="https://m.media-amazon.com/images/I/71RpTYfbRiL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
              </a>
            </div>
            <hr/>
            <div className="container-fluid black ">
              <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner ">
                  <a href="#">
                  <div className="carousel-item active ">
                    
                      <p>Up to 75% off | Unique and latest home décor products</p>
                      <img src="https://m.media-amazon.com/images/I/71yCOXIkN1L._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/71umUYyjXrL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/81iDqTDVr+L._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/51M-0OzscIL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/51M-0OzscIL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/71-sMugBOML._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/51SgDu27yFL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                    
                  </div>
                  
                  <div className="carousel-item ">
                      <p>Up to 75% off | Unique and latest home décor products</p>
                      <img src="https://m.media-amazon.com/images/I/51M-0OzscIL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/71umUYyjXrL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/81iDqTDVr+L._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/71yCOXIkN1L._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/51M-0OzscIL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/71-sMugBOML._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/51SgDu27yFL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                    
                  </div>
                  <div className="carousel-item">
                    <a href="">
                      <p>Up to 75% off | Unique and latest home décor products</p>
                      <img src="https://m.media-amazon.com/images/I/71yCOXIkN1L._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/71umUYyjXrL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/81iDqTDVr+L._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/51M-0OzscIL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/51M-0OzscIL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/71-sMugBOML._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                      <img src="https://m.media-amazon.com/images/I/51SgDu27yFL._AC_SY200_.jpg" alt="furniture" className="furniture"></img>
                    </a>
                  </div>
                  </a>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span className="carousel-control-next-icon">
                  </span>
                </button>
                </div>
            </div>
            
            <div className="containerimg">
              <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="vfx"></img>
          </div>
        </div>
        </>
    )
}

export default Collection;