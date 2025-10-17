import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    console.log('Contact form submitted:', formData);
    alert('Message sent successfully!');
    // In a real app, you'd send this data to a backend service
    setFormData({ // Clear form after submission
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <div id="contact-form" className="content-section"> {/* Added content-section class */}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </div>
          </div>
          
          <label htmlFor="subject">Subject:</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject of your message"
            required
          />
          
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            required
          ></textarea>
          
          <input type="submit" value="Send Message" />
        </form>
      </div>

      <div id="contact-info" className="content-section"> {/* Added content-section class */}
        <h3>Our Office</h3>
        <p><strong>Email:</strong> support@moviestream.com</p>
        <p><strong>Phone:</strong> +92-332-7045835</p>
        <p><strong>Address:</strong> University Of Central Punjab, Lahore, Pakistan</p>
      </div>

      <div id="contact-link">
        <Link to="/">← Go to Home</Link>
      </div>
    </>
  );
};

export default Contact;
