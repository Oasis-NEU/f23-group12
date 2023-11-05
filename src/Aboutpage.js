import { useState } from "react";

function AboutPage() {

/* constants and functions to set the names of the variables on input */
/* these get used in the <input> labels on the form so the page knows to take the values
and set the appropriate variables. */
const [name, setName] = useState("")
const [location, setLocation] = useState("")
const [eventType, setType] = useState("")
const [textArea, setTextArea] = useState("")

/* function to handle the event of submitting the form */
const handleSubmit = (event) => {
  event.preventDefault();
  alert(`The name you entered was: ${name}. The location you entered was: ${location}. The type of event you selected was ${eventType}. The description of the event is ${textArea}.`);
}

    return (
      /* <form> has an onSubmit tag to link it to the handleSubmit function */
      <form onSubmit = {handleSubmit}>
      <label>
        <center>
          <header>
            <big>
            Upload Your Own Event!!
            </big>
            </header>
        Name of the Event:
        <input type = "text"
          value = {name}
          onChange={(e) => setName(e.target.value)} />
        <br></br>

        Location:
        <input type = "text"
          value = {location}
          onChange={(e) => setLocation(e.target.value)} />
        <br></br>
  
         <label for="event-type">Choose Your Event Type:</label> 
      <select type="text"
             value={eventType}
             onChange={(e) => setType(e.target.value)}> 
             defaultValue="club"
          <option value=""></option> 
          <option value="club">Club</option> 
          <option value="frat">Frat</option> 
          <option value="food-and-drink">Food and Drink</option> 
          <option value="festival">Festival</option> 
          <option value="concert">Concert</option> 
          <option value="other">Other</option> 
      </select>
      <br></br>
        Description: <textarea description="description" cols="50" rows="10"
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
        ></textarea>
        <br></br>
        <button type="submit">Create!</button>
        </center>
      </label>
      </form>
    );
  }

  export default AboutPage;