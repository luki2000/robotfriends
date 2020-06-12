import React from 'react';
import Card from './Card';


const Cardlist = ({ robots }) => {
    const robotsLists = robots.map(robot => {
        return (
            <Card 
                key={robot.id} 
                id={robot.id} 
                name={robot.name} 
                email={robot.email}/>
        );
    })
    return (
    <div>
        {robotsLists}>
    </div>
    );
};

export default Cardlist;