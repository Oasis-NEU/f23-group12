function Concerts({events}) {
  const concertp = (event) => event.eventType === "Concert"
  return(
    <p>
      <center>
        Concerts
        </center>
        {events.filter(concertp).map((event) => <h1>{event.name + " - "}</h1> )}
        {events.filter(concertp).map((event) => <p>{event.location + "\n" + event.textArea + "\n\n"}</p>)}
    </p>
    )
  }

  export default Concerts;