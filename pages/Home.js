import React from 'react';
import { Link } from 'react-router-dom';
const Home=()=>{
    return(
        <div className='align1'>
       <font color="blue"><h1><em>ORDER MANAGEMENT SYSTEM</em></h1></font>
		<div>
			<Link to='/about'><button className='a'>About</button></Link>
			<Link to='/allorder'><button className='a'>Allorder</button></Link>
			<Link to='/updateorder'><button className='a'>Updateorder</button></Link>
		 <font color="blue"><Link to='/deleteorder'><button className='a'>DeleteOrder</button></Link></font>	
		</div>
        </div>
    
    )
}
export default Home;