function Other({events}) {
  const otherp = (event) => event.eventType === "Other"
  return(
    <header>
      <center class = "head-home">
        Other
        </center>
        {events.filter(otherp).map((event) => <h1>{event.name + " - "}</h1> )}
        {events.filter(otherp).map((event) => <p>{event.location + "\n" + event.textArea + "\n\n"}</p>)}
    </header>
    )
  }

  export default Other;