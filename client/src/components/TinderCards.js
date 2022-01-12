import React from 'react'
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import { useState } from 'react'
import Chloe from '../assets/Kameron.jpg'
import Nikko from '../assets/Nikko.png'

function TinderCards() {
  const [people, setPeople] = useState([
  //const people = [];
  {
    name: 'Nikko', 
    pic: Nikko
  },
  {
    name: 'Khloe' ,
    pic: Chloe
  }
]);
    return (
        <div>
            <h1>Tinder Cards</h1>
        
            <div className="tinderCards__cardContainer"> 
            {/* <div style= {{height: "95vh", width: "95vw"}}></div> */}
            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}

                >
                    <div 
                    className="card1">
                        <img className="Khloe" src={person.pic} alt="Khloe"/>
                        <h3>{person.name}</h3>
                    </div>
                    {/* <div 
                    className="card2">
                        <img className="Nikko" src={Nikko} alt="Nikko"/>
                        <h3>{person.name}</h3>
                    </div> */}
                </TinderCard>
            ))}
            </div>

        </div>
    );
}
export default TinderCards
