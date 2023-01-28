import Header from './Header'
import ContactInfo from './ContactInfo'
import Education from './Education'
import PracticalExperience from './PracticalExperience'
import '../App.css'

import { useState } from 'react'

const  Page = () => {
  const [contactInfo, setContactInfo] = useState([]);
  const [firstName, setName] = useState('');
  const [email, setEmail] = useState('');

  const submitContactInfo= (e) => {
    e.preventDefault()

    addInfo(firstName, email)

    setName('')
    setEmail('')

    console.log(contactInfo);

  }

  const addInfo = (contactInfo) => {
    const id = Math.floor(Math.random() * 10000) +1
    const newContactInfo = {id, firstName, email}
    setContactInfo([...contactInfo, newContactInfo])
  }

  
    return (
      <div className='gridContainer'>
        <Header />
        <ContactInfo 
          submitContactInfo={submitContactInfo} 
          setName={setName}
          setEmail={setEmail}
        />
        <Education />
        <PracticalExperience />
        <div className='resume'>
          {firstName}
          {contactInfo.email}
        </div>
      </div>
    )
}

export default Page