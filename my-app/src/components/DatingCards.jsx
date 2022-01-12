import React from 'react'

const Datingcards = () => {

    const [people, setPeople] = useState([

        {name: "Bill Billy", imgUrl:""},
        {name: "Kay Kally", imgUrl:""},
        {name: "Ren Renny", imgUrl:""},
        {name: "Scoot Scooter", imgUrl:""}
        
        ])
        const swiped = (direction, nameToDelete) => {
        console.log("receiving" + nameToDelete)
        }
        const outOfFrame = (name) => {
        console.log(name + " left the screen!!")
        }
    return (
        <div className="datingCards">
<div className="datingCards__container">
    {people.map((person) => (
    <Datingcard
    className="swipe"
    key={person.name}
    preventSwipe={['up', 'down']}
    onSwipe={(dir) => swiped(dir, person.name)}
    onCardLeftScreen={() => outOfFrame(person.name)} >
    <div style={{ backgroundImage: `url(${person.imgUrl})`}} className="card">
        <h3>{person.name}</h3>
    </div>
    </Datingcard>
    ))}
    </div>
    </div>
    )
}

export default Datingcards
