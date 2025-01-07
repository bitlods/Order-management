//Program to demonstrate HTTP get request
import React,{useMemo,useState,useEffect} from 'react'

import axios from 'axios' //import axios library
import Table from '../components/Table';

function AllOrder(){
    const columns = useMemo(
        () => [
          {
            // First group columns
            Header: "Order Details",
            columns: [
              {
                Header: "Order_ID",
                accessor: "order_id",
              },
              {
                Header: "Dateofpurchase",
                accessor: "dateofpurchase",
              },
              {
                Header: "Total",
                accessor: "total",
              },
              {
                Header: "Customer_ID",
                accessor: "customer_id",
              },
              {
                Header: "Paymentmode",
                accessor: "paymentmode",
              },
              {
                Header: "Shop_id",
                accessor: "shop_id",
              }
            ],
          },
        ],
        []
      );
    // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:8082/products");
      setData(result.data);
    })();
  }, []);

    return (
        <div className="App">
          <h1>List of Order</h1>
          <Table columns={columns} data={data} />
        </div>
      );

}
export default AllOrder;