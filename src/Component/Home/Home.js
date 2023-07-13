import React from "react";
import Image from "./Image";
import Search from "./Search";
import Collection from "./Collection";
import Header from "../Header";

const Home = () =>{
    return(
        <>
         <Header/>
          <Image/>
          <Search/>
          <Collection/>
         
        </>
    )
}


export default Home;