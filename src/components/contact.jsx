//react imports
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax} from 'react-icons/fa';
import { IoShieldCheckmark } from "react-icons/io5";
import { useTranslation } from 'react-i18next'

//component imports
import emailjs from 'emailjs-com';

//style import
import '../styles/contact.css'

function Contact() {
  const [t, i18n] = useTranslation("global");
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

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const userID = import.meta.env.VITE_PUBLIC_KEY;

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert("Message sent successfully!");
      }, (error) => {
        console.log('FAILED...', error);
      });

    // Optional: reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiry: ''
    });
  };

  return (
    <>
      <article className='contact-card'>
        <h2 className='contact-title'>{t("contact.title")}</h2>
        <div className='contact'>
          <form className='contact-form' onSubmit={handleSubmit}>
            <h3>{t("contact.form-title")}</h3>
            <div>
              <input
              className='input'
              type="text"
              name="name"
              placeholder={t("contact.name")}
              value={formData.name}
              onChange={handleChange}
              />
            </div>
            <div>
              <input
                className='input'
                type="email"
                name="email"
                placeholder={t("contact.email")}
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
                placeholder={t("contact.phone")}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                className='input-text'
                placeholder={t("contact.message")}
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
              />
            </div>
            <button className='submit-button' type="submit">{t("contact.submit")}</button>
          </form>
          <div className='contact-info'>
            <h3>Cisneros Injury Law PLLC</h3>
            <p><FaMapMarkerAlt/> 3575 Far West Blvd.
            PO Box 30166
            Austin, Texas 78755</p>
            <p><FaPhone/> (512) 817-4477</p>
            <p><FaFax/> (512) 641-0739</p>
            <p><FaEnvelope/> joel@cisnerosinjurylaw.com</p>
            <p><IoShieldCheckmark/> <a 
            className='link'
            href='https://www.texasbar.com/AM/Template.cfm?Section=Find_A_Lawyer&template=/Customsource/MemberDirectory/MemberDirectoryDetail.cfm&ContactID=310000'>
            State Bar of Texas</a></p>
          </div>
        </div>
      </article>
    </>
  )
}

export default Contact