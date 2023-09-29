// JobApplicationForm.js
import React, { Component } from 'react';
import SummaryPage from './SummaryPage';
import './job.css';



class JobApplicationForm extends Component {

  constructor(props) {

    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      state: '',
      experience: '',
      position: '',
      desiredPackage: '',
      joiningDate: '',
      submitted: false,
      errorMessage: '',
      inputFields: []
    };


    this.handleInputChange = (event) => {

      console.log(event.target);
      const { name, value } = event.target;
      console.log(name);
      console.log(value);
      this.setState({ [name]: value });
    };

    this.handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form data submitted:', this.state);
      this.setState({ submitted: this.validateInput() });
    };


    const isValidName = (name) => {
      var namePattern = /^[A-Za-z\s]+$/;
      let isValid = namePattern.test(name.trim()) && name.trim() !== '';
      return isValid;
    };

    this.validateInput = () => {
      let isValid = true; // Assume valid by default
      let errorMessage = ''; // Initialize error message

      // Check each input field
      if (!isValidName(this.state.firstName)) {
        isValid = false;
        errorMessage += 'Invalid First Name. ';
      }

      if (!isValidName(this.state.lastName)) {
        isValid = false;
        errorMessage += 'Invalid Last Name. ';
      }

      if (!isValidName(this.state.state)) {
        isValid = false;
        errorMessage += 'Invalid State. ';
      }

      if (!isValidName(this.state.position)) {
        isValid = false;
        errorMessage += 'Invalid Position. ';
      }

      // Set error message in state
      this.setState({ errorMessage });

      return isValid;
    };
  


   

  }

  // Add event handlers to handle form input changes

  render() {

    if (this.state.submitted) {
      return <SummaryPage summary={this.state} />;
    }

    return (
      <div className='outer-container'> {/* Apply the "outer-container" class */}
        <div className='box'> {/* Apply the "box" class */}
          <h2>Job Application Form</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div className='row'>
                <div className='label-container'>
                  <label>
                    First Name:
                  </label>
                </div>
                <div className='input-container'>
                  <input
                    type="text"
                    name="firstName"
                    className='input'
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='label-container'>
                  <label>
                    Last Name:
                  </label>
                </div>
                <div className='input-container'>
                  <input
                    type="text"
                    name="lastName"
                    className='input'
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                  />
                </div>

              </div>
              <div className='row'>
                <div className='label-container'>
                  <label>
                    State:
                  </label>
                </div>
                <div className='input-container'>
                  <input
                    type="text"
                    name="state"
                    className='input'
                    value={this.state.state}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='label-container'>
                  <label>
                    Years of Experience:
                  </label>
                </div>
                <div className='input-container'>
                  <input
                    type="number"
                    name="experience"
                    className='input'
                    value={this.state.experience}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='label-container'>
                  <label>
                    Position:
                  </label>
                </div>
                <div className='input-container'>
                  <input
                    type="text"
                    name="position"
                    className='input'
                    value={this.state.position}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='label-container'>
                  <label>
                    Desired Package:
                  </label>
                </div>
                <div className='input-container'>
                  <input
                    type="text"
                    name="desiredPackage"
                    className='input'
                    value={this.state.desiredPackage}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='label-container'>
                  <label>
                    Joining Date:
                  </label>
                </div>
                <div className='input-container'>
                  <input
                    type="date"
                    name="joiningDate"
                    className='input'
                    value={this.state.joiningDate}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div>
                 <button type="submit" className='highlight-button' >Submit</button>
                 </div>
                 <div className='redMessage'>
                      {this.state.errorMessage}
                 </div>
            </div>
          </form>

        </div>
      </div>
    );



  }



  // Implement event handlers for form input changes and submission
}

export default JobApplicationForm;
