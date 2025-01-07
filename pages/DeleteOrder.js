import React from 'react';  
    
import axios from 'axios';  
    
class DeleteOrder extends React.Component {  
  state = {  
    posts: []  
  }  
    
  componentDidMount() {  
    axios.get(`http://localhost:8082/products`)  
      .then(res => {  
        const posts = res.data;  
        this.setState({ posts });  
      })  
  }  
    
  deleteRow(id, e){  
    axios.delete(`http://localhost:8082/products/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const posts = this.state.posts.filter(item => item.id !==id );  
        this.setState({ posts });  
      })  
    
  }  
    
  render() {  
    return (  
      <div>  
        <h1> Delete Request </h1>  
    
        <table className="table table-bordered">  
            <thead>  
              <tr>  
                  <th>Order_ID</th>  
                  <th>Dateofpurchase</th>  
                  <th>Total</th> 
                  <th>Customer_ID</th> 
                  <th>Paymentmode</th>  
                  <th>Shop_Id</th>  
              </tr>  
            </thead>  
    
            <tbody>  
              {this.state.posts.map((post) => (  
                <tr>  
                  <td>{post.order_id}</td>  
                  <td>{post.dateofpurchase}</td>  
                  <td>{post.total}</td>  
                  <td>{post.customer_id}</td>
                  <td>{post.paymentmode}</td>    
                  <td>{post.shop_id}</td> 
                  <td>  
                    <button className="btn-btn-danger" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>  
                  </td>  
                </tr>  
              ))}  
            </tbody>  
    
        </table>  
      </div>  
    )  
  }  
}  
export default DeleteOrder;