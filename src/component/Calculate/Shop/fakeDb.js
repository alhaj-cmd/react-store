//import React from 'react';

const fakeDb = _id => {
    let shoppingCart;

    // get the shopping cart

    const storedCard = localStorage.getItem('shopping-Cart');
   // console.log(storedCard)
    if(storedCard){
       shoppingCart=JSON.parse(storedCard);
       //console.log(storedCard);

    }
    else{
        shoppingCart = {};

    }

    // add quantity
    const  quantity = shoppingCart[_id];
    if(quantity){
       // console.log('already exists');
        const newQuantity = quantity+1;
        shoppingCart[_id]=newQuantity;
       // localStorage.setItem(_id, newQuantity);
    }
    else{
        shoppingCart[_id]=1;
        //console.log('new item');
       // localStorage.setItem(_id,1)
    }
    localStorage.setItem('shopping-Cart',JSON.stringify(shoppingCart))

};

const removeItemsDb = _id =>{
   // console.log('removeFromId',id);
   const storedCard = localStorage.getItem('shopping-Cart');
   if(storedCard){
    const shoppingCart = JSON.parse(storedCard);
    if( _id in shoppingCart){
       // console.log('very exciting for delete')
       delete shoppingCart[ _id];
       localStorage.setItem('shopping-Cart',JSON.stringify(shoppingCart))

    }
   }
}

const deleteShopingCart =()=>{
    localStorage.removeItem('shopping-Cart');
}

export { fakeDb, removeItemsDb, deleteShopingCart};