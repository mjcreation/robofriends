import React from 'react';

let roboFace = {};
let i=0;
for (i=0; i < 6 ; i++) {
    roboFace[i] = '"https://robohash.org/roboface' + i + '?180x180"';
}

const Card = ({id, name, email}) =>{
    return(
        <div className="tc bg-light-green dib br3 pa1 ma2 grow bw shadow-5">
            <img src={`https://robohash.org/${id}?180x180`} alt="RoboFace1" />
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;