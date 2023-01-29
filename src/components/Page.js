import Header from './Header'
import ContactInfo from './ContactInfo'
import Education from './Education'
import PracticalExperience from './PracticalExperience'
import '../App.css'

import { useState } from 'react'

const  Page = (props) => {
  
  function addContactInfo(name) {
    const contactInfo = { name }
  } 
  
  return (
    <div className='gridContainer'>
      <Header />
      <ContactInfo />
      <Education />
      <PracticalExperience />
      <Page addContactInfo={addContactInfo}/>
    </div>
  )
}

export default Page