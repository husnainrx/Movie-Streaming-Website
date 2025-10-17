import { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    membership: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('Form submitted:', formData);
    alert('Registration successful!');
  };

  return (
    <>
      <div id="registration-form" className="content-section"> {}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstname">First Name:</label>
              <input 
                type="text" 
                id="firstname" 
                name="firstname" 
                value={formData.firstname}
                onChange={handleChange}
                required 
                placeholder="First name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
              <input 
                type="text" 
                id="lastname" 
                name="lastname" 
                value={formData.lastname}
                onChange={handleChange}
                required 
                placeholder="Last name"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder="Your email address"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={formData.password}
                onChange={handleChange}
                required 
                placeholder="Create password"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
                placeholder="Confirm password"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select 
                id="gender" 
                name="gender" 
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="membership">Membership Type:</label>
              <select 
                id="membership" 
                name="membership" 
                value={formData.membership}
                onChange={handleChange}
              >
                <option value="">Select Membership</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Annual">Annual</option>
              </select>
            </div>
          </div>
          
          <input type="submit" value="Register" />
        </form>
      </div>

      <div id="contact-link">
        <Link to="/">← Back to Home</Link>
      </div>
    </>
  );
};

export default Registration;
