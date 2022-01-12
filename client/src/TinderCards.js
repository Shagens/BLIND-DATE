import React from 'react'
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import { useState } from 'react'
function TinderCards() {
  const [people, setPeople] = useState([
  //const people = [];
  {
    name: 'Bruno Mars', 
    url: "https://static01.nyt.com/images/2021/11/13/arts/12silksonic-review/12silksonic-review-mediumSquareAt3X.jpg"
  },
  {
    name: 'Zendaya Coleman' ,
    url: "https://www.byrdie.com/thmb/p1NcK7Kxq2V2Akp0ii9zxJMPifk=/735x0/Screenshot1906-6fc696a44dba4097a4a42961f77f244f.png"
  }
]);
    return (
        <div>
            <h1>Tinder Cards</h1>
        
            <div className="tinderCards__cardContainer"> 
            
            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}

                >
                    <div 
                    style={{ backgroundImage: 'url(${person.url})'}}
                    className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>

        </div>
    );
}
export default TinderCards
