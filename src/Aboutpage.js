function AboutPage() {
    return (
      <label>
        <center>
          <header>
            <big>
            Upload Your Own Event!!
            </big>
            </header>
        Name of the Event: <input name="name" />
        <br></br>
        Location: <input location="location" />
        <br></br>
  
        <label for="event-type">Choose Your Event Type:</label> 
      <select name="event-type" id="event-type"> 
          <option value="club">Club</option> 
          <option value="frat">Frat</option> 
          <option value="food-and-drink">Food and Drink</option> 
          <option value="festival">Festival</option> 
          <option value="concert">Concert</option> 
          <option value="other">Other</option> 
      </select>
    
  <br></br>
  
  
  
        Description: <textarea description="description" cols="50" rows="10"></textarea>
        <br></br>
        <button>Create!</button>
        </center>
      </label>
    );
  }

  export default AboutPage;