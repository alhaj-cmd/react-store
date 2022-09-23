import React from 'react';
import Shop from '../Calculate/Shop/Shop';
import './Cosmetic.css'


const Cosmetic = () => {
    const cosmetics =[
        {
          "_id": "632c2ec089284950ca09f1f3",
          "price": 199,
          "name": "Aileen Odom"
        },
        {
          "_id": "632c2ec07b20115ffbb5ba5e",
          "price": 30,
          "name": "Alejandra Bray"
        },
        {
          "_id": "632c2ec0a7fc1c9f8c168d4f",
          "price": 228,
          "name": "Marva Garza"
        },
        {
          "_id": "632c2ec0bd72313dadca51d8",
          "price": 459,
          "name": "Lorena Hunt"
        },
        {
          "_id": "632c2ec028d5fd8c1c9ada78",
          "price": 461,
          "name": "Harriett Pierce"
        },
        {
          "_id": "632c2ec0abc1facefee27de1",
          "price": 58,
          "name": "Kristie Franco"
        },
        {
          "_id": "632c2ec0c0ed4e66f768eeac",
          "price": 284,
          "name": "Curry Fulton"
        }
      ]
    return (
        <div>
            <h3>hello cosmentic</h3>
           {
            cosmetics.map(cosmetic =><Shop
                 cosmetic={cosmetic}
                 key ={cosmetic._id}
                 ></Shop>)
           }
        </div>
    );
};

export default Cosmetic;