import React, {useState, useEffect} from "react";

function Coffees(){
    const [coffeeList, setCoffeeList] = useState();
    const [temperature, setTemperature] = useState('hot');
    useEffect(() => {
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
        .then(response => response.json())
        .then(data => setCoffeeList(data))
        .catch(err => console.error(err))
    }, [temperature])
    return(
        <section className="coffee-container" id= "coffees">
        <h2>Coffee Recipes</h2>
        <button onClick={() => setTemperature('hot')}>HOT</button> 
        <button onClick={() => setTemperature('iced')}>Iced</button>
        {!coffeeList

        ? <h3>Loading....</h3>

        : <ol>{coffeeList.map(coffee => {
            return <li key={coffee.id}>{coffee.title}</li>
        })} </ol>
    }
        </section>
    )
}

export default Coffees;