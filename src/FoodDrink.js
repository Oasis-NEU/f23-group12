function FoodDrink({events}) {
  const foodDrinkp = (event) => event.eventType === "Food-And-Drink"
  return(
    <header>
      <center class = "food-home">
        Food and Drinks
        </center>
        {events.filter(foodDrinkp).map((event) => <h1>{event.name + " - "}</h1> )}
        {events.filter(foodDrinkp).map((event) => <p>{event.location + "\n" + event.textArea + "\n\n"}</p>)}
    </header>
    )
  }

  export default FoodDrink;