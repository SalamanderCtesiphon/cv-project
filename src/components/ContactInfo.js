
import '../styles/ContactInfo.css';

const ContactInfo = ({ submitContactInfo, setName, setEmail, firstName, email }) => {
    
        return (
            <div className="inputForm contactInfo">
                <h3>Contact Info</h3>
                <form onSubmit={submitContactInfo}>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            name="name"
                            value={firstName}
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </label>
                    <label>
                        Email:
                        <input 
                            type="text" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </label>
                    <label>
                        Phone:
                        <input type="text" name="phone" />
                    </label>
                    <label>
                        Address:
                        <input type="text" name="address" />
                    </label>
                    <label>
                        City:
                        <input type="text" name="city" />
                    </label>
                    <label>
                        State:
                        <input type="text" name="state" />
                    </label>
                    <label>
                        Zip:
                        <input type="text" name="zip" />
                    </label>
                    <label>
                        Country:
                        <input type="text" name="country" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
}

export default ContactInfo;
