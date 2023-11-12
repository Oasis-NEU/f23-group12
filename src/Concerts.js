function Concerts({events}) {
  const concertp = (event) => event.eventType === "Concert"
  return(
    <p>
      <center class = "head-home">
        Concerts
        </center>
        {events.filter(concertp).map((event) => <h1>{event.name}</h1> )}
        {events.filter(concertp).map((event) => <h2>{event.location}</h2> )}
        {events.filter(concertp).map((event) => <p>{event.textArea}</p> )}
    </p>
    )
  }

  export default Concerts;