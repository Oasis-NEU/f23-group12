import React, { useState } from "react";

function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    eventType: "",
    textArea: "",
  });
  const [showFormData, setShowFormData] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowFormData(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <center>
          <header>
            <big>Upload Your Own Event!!</big>
          </header>
          <label>
            Name of the Event:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="event-type">Choose Your Event Type:</label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="club">Club</option>
            <option value="frat">Frat</option>
            <option value="food-and-drink">Food and Drink</option>
            <option value="festival">Festival</option>
            <option value="concert">Concert</option>
            <option value="other">Other</option>
          </select>
          <br />
          Description:
          <textarea
            name="textArea"
            description="description"
            cols="50"
            rows="10"
            value={formData.textArea}
            onChange={handleInputChange}
          ></textarea>
          <br />
          <button type="submit">Create!</button>
        </center>
      </form>

      {showFormData && (
        <div>
          <h2>Form Data</h2>
          <p>Name: {formData.name}</p>
          <p>Location: {formData.location}</p>
          <p>Event Type: {formData.eventType}</p>
          <p>Description: {formData.textArea}</p>
        </div>
      )}
    </div>
  );
}

export default AboutPage;
