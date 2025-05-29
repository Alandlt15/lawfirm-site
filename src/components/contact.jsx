//react imports
import React, { useState } from 'react';

//component imports


//style import
import '../styles/contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    text: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can also send data to a backend here
  };

  return (
    <>
      <article className='contact-card'>
        <h2>Get in Contact</h2>
        <div className='contact'>
          <form className='contact-form' onSubmit={handleSubmit}>
            <div>
              <label>Name:</label><br />
              <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              />
            </div>
            <div>
              <label>Email:</label><br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Phone:</label><br />
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Inquiry:</label><br />
              <input
                type="text"
                name="inquiry"
                value={formData.text}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className='contact-info'>
            <h3>Cisneros Injury Law PLLC</h3>
            <p>3575 Far West Blvd.</p>
            <p>PO Box 30166</p>
            <p>Austin, Texas 78755</p>
            <p>Tel: (512) 817-4477</p>
            <p>Fax: (512) 641-0739</p>
            <p>Email: joel@cisnerosinjurylaw.com</p>
          </div>
        </div>
      </article>
    </>
  )
}

export default Contact