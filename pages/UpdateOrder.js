//Program to demonstrate HTTP post request
import React, { Component } from 'react'
import axios from 'axios'
import '../App.css';

class UpdateOrder extends Component {
    
    constructor(props){
        super(props)
        this.state={
            order_id:'',
            dateofpurchase:'',
            total:'',
            customer_id:'',
            paymentmode:'',
            shop_id:'',
        }
    }

    //event function having event has an argument
    ChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    
    //on click of submit button submithandler function will be invoke
    submitHandler=(e)=>{
        console.log(this.state.id)
        axios.post('http:localhost:8082/products',this.state)
        .then(response=>{
            console.log(response)
            
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    render() {
        const{ order_id,dateofpurchase,total,customer_id,paymentmode,shop_id}= this.state
        return (
            <div className="inputdetails">
                <form onSubmit={this.submitHandler} >
                    <div>
                        <h1>Input the Required Details</h1>
                    </div>
                    <div>
                        <input type="text" name="order_id" value={order_id} placeholder="Order Order_Id" onChange={this.ChangeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="dateofpurchase" value={dateofpurchase} placeholder="Order Dateofpurchase" onChange={this.ChangeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="total" value={total} placeholder="Order Total" onChange={this.ChangeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="customer_id" value={customer_id} placeholder="Order Customer" onChange={this.ChangeHandler}/>
                    </div>
                    <div>
                        <input type="text" name=" paymentmode" value={paymentmode} placeholder="Order  Paymentmode" onChange={this.ChangeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="shop_id" value={shop_id} placeholder="Order Shop_id" onChange={this.ChangeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                    
                </form>
            </div>
        )
    }
}
export default UpdateOrder;