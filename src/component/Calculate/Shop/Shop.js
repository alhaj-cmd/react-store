import React from 'react';
import { fakeDb, removeItemsDb } from './fakeDb';
//import fakeDb from './fakeDb';
import './Shope.css'

const Shop = (props) => {
    const {name, price, _id}=props.cosmetic;
    const AddToCard = (_id)=>{
      //  console.log("It's click",_id);
    //   localStorage.setItem(_id, 1)
    fakeDb(_id);
    }
    // const AddToCart = () =>{AddToCard(_id)}

    const removeItems  = id  =>{
      //console.log('removing', id);
      removeItemsDb(id)

    } 
 
    return (
        <div className='product'>
             <h2>Name: {name}</h2>
             <p>price: {price}</p>
             <p>id: {_id}</p>
             {/* <button onClick={AddToCart}>Add to Card</button> */}
             <button onClick={()=>{AddToCard(_id)}} >Add to Card</button>
             <button onClick={() => removeItems(_id)}>Remove</button>
            
        </div>
    );
};






export default Shop;