import React,{useState,useEffect} from "react";
import'./Header.css';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
const url ="https://amazonapi-mjkr.onrender.com/user"
const Header = () => {

    const [userData,setUserData] = useState('')
    let navigate = useNavigate();

    useEffect(() => {
        if(sessionStorage.getItem('ltk') !== null){
            fetch(url,{
                method:'GET',
                headers:{
                    'x-access-token':sessionStorage.getItem('ltk')
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setUserData(data)
            })
        }
    },[])

    const handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('user')
        setUserData('');
        navigate('/')
    }

    const ConditionalHeader =  () => {
        if(userData){
            if(userData.name){
                sessionStorage.setItem('user',JSON.stringify(userData))
                return(
                    <>
                         <Link to="register" className="btn btn-primary me-2 return">{userData.name}</Link>
                            {/* <Link to="login" className="btn btn-primary">login</Link> */}
                        <button onClick={handleLogout} className='btn btn-danger'>
                         Logout
                        </button>
                    </>
                )
            }
        }else{
                return(
                    <>
                        <Link to="register" className="btn btn-primary me-2 return">SignUp</Link>
                            <Link to="login" className="btn btn-primary">login</Link>
                    </>
                )
            }
    }

   

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                    <div className="container-fluid ">
                        <a href="/" className="navbar-brand">
                            <img src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png" alt="amazon" className="logo1"/>
                        </a>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link to="#" className="nav-link"/>
                                        <button onClick={geolocation()} className="a2"><i className="bi bi-geo-alt-fill"></i><p id="weather"></p></button>
                                    
                                </li>
                            </ul>
                            <form className="d-flex ">
                                <input className="form-control me-2 box " type="text" placeholder="search for products"></input>
                                <button className="btn btn-primary " type="button"><i className="bi bi-search"></i></button>
                            </form>
                            {/* <button onClick={changeMode()} className="btn btn-primary f2 mydark"><i className="bi bi-sun"></i></button> */}
                            {ConditionalHeader()}
                           
                        </div>
                    </div>
                </nav>
                <br/>
                <nav className="navbar navbar-expand-sm box1 ">
                    <ul className="nav">
                        <li className="nav-item dropdown">
                        <Link to={`/listing/1`} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">All</Link>
                            <ul className="dropdown-menu ">
                                <li><Link to={`/listing/1`}className="dropdown-item">Watch</Link></li>
                                <li className="nav-item dropdown">
                                <Link to={`/listing/1`} className="nav-link dropdown-toggle box10" href="#" role="button" data-bs-toggle="dropdown">Fashion</Link>
                                    <ul className="dropdown-menu ">
                                        <li><Link to={`/listing/1`}className="dropdown-item" >Men's Cloths</Link></li>
                                        <li><Link to={`/listing/1`}className="dropdown-item">Women's Cloths</Link></li>
                                        <li><Link to={`/listing/1`} className="dropdown-item" >Kid's Cloths</Link></li>
                                    </ul>
                                </li>
                                <li><Link to={`/listing/3`}className="dropdown-item" href="#">Automotive essentials</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                        <Link to={`/listing/1`} className="nav-link"> SmartWatch</Link>
                        </li>
                        <li className="nav-item">
                        <Link to={`/listing/2`} className="nav-link"> Mobiles</Link>
                        </li>
                        <li className="nav-item">
                        <Link to={`/listing/3`} className="nav-link"> Auto essentials</Link>
                        </li>
                        <li className="nav-item">
                        <Link to={`/listing/4`} className="nav-link"> Amazon Pharma</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>


    );
}





const a = document.getElementById('out');
const y = document.getElementById('weather');

function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        a.innerText="Geo Not Supported"
    }
}
function showPosition(data){
    console.log(data)
   const lat = data.coords.latitude
    const lon = data.coords.longitude
   
    // x.innerText = `Latitude is ${lat} and longitude is ${lon}`
   
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //api calling
    fetch(url,{method: 'GET'})
    //return promise
    .then((res) =>res.json())
    //resolve the promise
    .then((data) => {
        console.log(data)
        const cityName = data.city.name;
    //   let temp = data.list[0].temp.day+" °C"
        y.innerText= `${cityName}`
      
    })
}


//   function changeMode(){
//       let mybody = document.body;
//       mybody.classList.toggle('mydark')
// }





export default Header ;