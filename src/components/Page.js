import Header from './Header'
import ContactInfo from './ContactInfo'
import Education from './Education'
import PracticalExperience from './PracticalExperience'
import '../App.css'
import Resume from './Resume'

const  Page = () => {

  
    return (
      <div className='gridContainer'>
        <Header />
        <ContactInfo />
        <Education />
        <PracticalExperience />
        <Resume />
      </div>
    )
}

export default Page