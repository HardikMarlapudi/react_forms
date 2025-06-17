import React from 'react';
import './index.css';
import './Footer.css';


function App() {

  return (
    <>
     <h1 id="title">Forms Application</h1>

     <div class="main">
        <p>Enter your First Name:</p>
        <input 
        type="text" 
        id="firstName" 
        name="firstName"
        placeholder="First Name:" 
        />

        <p>Enter your Last Name:</p>
        <input type="text" id="lastName" placeholder="Last Name: " />

        <p>Enter your Email: </p>
        <input type="text" id="email" placeholder="Email: " />

        <p>Enter your Contact: </p>
        <input type="text" id="contact" placeholder="Contact: " />

        <p>Gender:*</p>
        <input type="radio" id="male" name="gender" value="male" />
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label for="female">Female</label>
        <input type="radio" id="other" name="gender" value="other" />
        <label for="other">Other</label>

        <p>Your best Subject</p>
        <input type="checkbox" id="english" name="subject" value="english" />
        <label for="english">English</label>
        <input type="checkbox" id="math" name="subject" value="math" />
        <label for="math">Math</label>
        <input type="checkbox" id="physics" name="subject" value="physics" />
        <label for="physics">Physics</label>

        <p>Upload Resume*</p>
        <input type="file" id="resume" name="resume" />

        <p>Enter URL*</p>
        <input type="url" id="url" name="url" placeholder="Enter URL: " />

        <p>Select your choice: </p>
        <select id="choice" placeholder="Select your choice: ">
          <option value="option1">1</option>
          <option value="option2">2</option>
          <option value="option3">3</option>
          <option value="option4">4</option>
        </select>

        <p>About</p>
        <input type="textarea" id="about" name="about" placeholder="About yourself: " />
      
        <p>Submit OR Reset</p>

        <button id="reset">Reset</button>
        <button id="submit">Submit</button>
     </div>
    </>
  )
}

export default App;
