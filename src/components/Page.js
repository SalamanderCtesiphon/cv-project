import React, { Component } from 'react'
import Header from './Header'
import ContactInfo from './ContactInfo'
import Education from './Education'
import PracticalExperience from './PracticalExperience'
import '../App.css'

export class Page extends Component {
  render() {
    return (
      <div className='gridContainer'>
        <Header />
        <ContactInfo />
        <Education />
        <PracticalExperience />
      </div>
    )
  }
}

export default Page