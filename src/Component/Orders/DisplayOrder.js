import React from 'react';

const Display = (props) => {

    const renderData = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.Id}</td>
                        <td>{item.product_name}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>₹{item.Price}</td>
                        <td>{item.phone}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container" style={{width:"1000px" , height:"auto" ,backgroundColor:" #febd69"}}>
            <center><h3><u>Your Order's</u></h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Product Name</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Price</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData(props)}
                </tbody>
            </table>
        </div>

    )

}

export default Display;