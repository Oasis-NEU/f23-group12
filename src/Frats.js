function Frats({events}) {
  const fratp = (event) => event.eventType === "Frat"
  return(
    <header>
      <center class = "head-home">
        Frat
        </center>
        {events.filter(fratp).map((event) => <h1>{event.name}</h1> )}
        {events.filter(fratp).map((event) => <h2>{event.location}</h2> )}
        {events.filter(fratp).map((event) => <p>{event.textArea}</p> )}
    </header>
    )
  }

  export default Frats;