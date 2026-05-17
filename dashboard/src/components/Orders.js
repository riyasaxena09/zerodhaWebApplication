import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Orders = () => {

  const [orders,setOrders]=React.useState([]);

  useEffect(()=>{
     axios.get("http://localhost:3002/orders").then((res)=>{
      setOrders(res.data);
     });
  }, []);

  return (
    <div className="orders">
      {orders.length < 0 && <div className="no-orders">
        <p>You haven't placed any orders today</p>
     
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>}

        <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Mode</th>
          </tr>

          {orders.map((stock, index) => {

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.price}</td>
                <td>{stock.qty}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
     
    </div>
  );
};

export default Orders;
