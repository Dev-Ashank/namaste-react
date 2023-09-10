import './ContactUs.css'
const ContactUs = () => {
    return (
        <div className="contact-container">
            <div className="contact-card"> {/* Updated class name */}
                <h2>Contact Us 🌶️</h2>
                <div className="contact-info">
                    <p>Email: contact@chillifood.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Address: 123 Spice Street, Hot City</p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;