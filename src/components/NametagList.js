import React from 'react';
import Nametag from './Nametag';

const NametagList = ({ people }) => {
    console.log(people);
    return (
        //<p>hello</p>
        <div className='flex flex-wrap mh3 justify-around'>
            {
                people.map((person, i) => {
                    return <Nametag key={person.name} person={person} />
                }) 
            }
        </div> 
    )
}

export default NametagList
