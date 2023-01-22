import React from 'react'
import ContactUs from '../components/ContactPages/ContactUs'
import ContactUSS from '../components/ContactPages/ContactUSS'

const contact = () => {
  return (
    <div className="lg:pt-32 pt-10 bg-dark">
      <ContactUSS />
      <ContactUs />
    </div>
  );
}

export default contact
