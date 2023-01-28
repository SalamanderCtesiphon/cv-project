
const Resume = ({ contactInfo }) => {

    return (
      <div className='resume'>
        {contactInfo.firstName}
        {contactInfo.email}
      </div>
    )
}

export default Resume