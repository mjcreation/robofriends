import React from 'react';
import Card from './Card.js';
import {robots} from './robots';

// const cardArray = [];
// let i=0;

// const CardGenerator = (i) => {
//     return (
//         <Card id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email} />
//     );
// }

// export const CardList = () =>{
//     for (i=0; i < 10 ; i++) cardArray[i]= CardGenerator(i);
//     return cardArray;
// }

export const CardList = () => {
    const cardGenerator = robots.map((id, i) =>
        <Card key={i} id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email} />
    );
    return cardGenerator;
}