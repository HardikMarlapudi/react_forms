import React, { useState } from 'react';
import './index.css';
import './Footer.css';


function App() {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subject: "",
    resume: "",
    url: "",
    choice: "",
    about: "",
  });

  const handleChange = (e) => {

    const {name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => {
        const newSubjects = checked
          ? [...prev.subject, value]
          : prev.subject.filter((s) => s !== value);
        return { ...prev, subject: newSubjects };
      });
    } else if (type === 'file') {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else if (type === 'radio') {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "",
      subject: "",
      resume: "",
      url: "",
      choice: "",
      about: "",
    });
  };

  return (
    <>
     <h1 id="title">Forms Application</h1>

     <form class="main" onSubmit={handleSubmit}>
        <p>Enter your First Name:</p>
        <input 
        type="text" 
        id="firstName" 
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name:" 
        />

        <p>Enter your Last Name:</p>
        <input type="text" 
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name: " />

        <p>Enter your Email: </p>
        <input type="text" 
        id="email" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email: " />

        <p>Enter your Contact: </p>
        <input type="text" 
        id="contact"
        name="contact"
        value={formData.contact}
        onChange={handleChange} 
        placeholder="Contact: " />

        <p>Gender:*</p>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          /> Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          /> Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender === 'other'}
            onChange={handleChange}
          /> Other
        </label>

        <p>Your best Subject: </p>
        <label>
          <input
            type="checkbox"
            name="subject"
            value="english"
            checked={formData.subject.includes('english')}
            onChange={handleChange}
          /> English
        </label>
        <label>
          <input
            type="checkbox"
            name="subject"
            value="math"
            checked={formData.subject.includes('math')}
            onChange={handleChange}
          /> Math
        </label>
        <label>
          <input
            type="checkbox"
            name="subject"
            value="physics"
            checked={formData.subject.includes('physics')}
            onChange={handleChange}
          /> Physics
        </label>

        <p>Upload Resume*</p>
        <input 
        type="file" 
        id="resume" 
        name="resume"
        onChange={handleChange}
        />

        <p>Enter URL*</p>
        <input 
        type="url"
        name="url"
        value={formData.url}
        onChange={handleChange}
        placeholder="Enter URL: " />

        <p>Select your choice: </p>
        <select 
        name="choice"
        value={formData.choice}
        onChange={handleChange}
        placeholder="Select your choice: "
        >
          <option value="">Select</option>
          <option value="option1">1</option>
          <option value="option2">2</option>
          <option value="option3">3</option>
          <option value="option4">4</option>
        </select>

        <p>About</p>
        <textarea 
        id="about" 
        name="about"
        onChange={handleChange} 
        placeholder="About yourself: " />
      
        <p>Submit OR Reset</p>
        <button 
        id="reset"
        type="button"
        onClick={handleReset}>Reset</button>
        <button id="submit">Submit</button>
     </form>
    </>
  )
}

export default App;
