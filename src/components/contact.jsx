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
    inquiry: ''
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
        <h2>Schedule Your Case Evaluation</h2>
        <div className='contact'>
          <form className='contact-form' onSubmit={handleSubmit}>
            <h3>Get In Contact!</h3>
            <div>
              <input
              className='input'
              type="text"
              name="name"
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              />
            </div>
            <div>
              <input
                className='input'
                type="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className='input'
                type="tel"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="Phone (123-456-7890)"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                className='input-text'
                placeholder="Message"
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
              />
            </div>
            <button className='submit-button' type="submit">Submit</button>
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