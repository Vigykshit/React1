import React,{useState} from 'react';
import { useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./placeorder.css";
import Header from '../Header';

const url = "https://amazonapi-mjkr.onrender.com/placeorder"

const PlaceOrder = () => {
    let params = useParams();
    let navigate = useNavigate();

    // let sessionData = sessionStorage.getItem('orders');
    // let data  = JSON.parse(sessionData)

    const initialValues = {
        Id: Math.floor( Math.random()*100000),
        product_name: params.product_name,
        name: "",
        email: "",
        Price: Math.floor(Math.random()*1000000),
        phone: "",
        address: ""
    };

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    };

    const checkout = () => {
        console.log(values)
        fetch(url ,{
            method: "POST",
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate(`/viewOrder`))
    }
    

    return(
        <>
            <Header/>
            <div className="container boom">
                <hr/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Order For {params.product_name}</h3>
                    </div>
                    <hr/>
                    <div className="panel" style={{textAlign:"start" , fontSize:"20px"}}>
                        Fill the details below
                        
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label for="fname" className="control-label">Name</label>
                                <input className="form-control" id="fname"
                                name="name" value={values.name} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Phone</label>
                                <input className="form-control" id="phone"
                                name="phone" value={values.phone} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="address" className="control-label">Address</label>
                                <input className="form-control" id="address"
                                name="address" value={values.address} onChange={handleInputChange}/>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Total Price is Rs. {values.Price}</h2>
                            </div>
                        </div>
                        <button className='btn btn-primary' onClick={checkout}>
                                Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default PlaceOrder