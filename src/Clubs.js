function Clubs({events}) {
  const clubp = (event) => event.eventType === "Club"
    return(
    <header>
      <center class = "head-home">
        Club
        {events.filter(clubp).map((event) => <h1>{event.title}</h1>)}
        {events.filter(clubp).map((event) => <p>{event.location + "\n" + event.textArea}</p>)}
        </center>
    </header>
    )
  }

  export default Clubs;