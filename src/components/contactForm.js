import React from 'react';

const ContactForm = () => {
    return <form className = 'contact-form' action='https://formspree.io/moqnwllv' method='post' target="_blank" rel="noopener noreferrer">
    <textarea id="msg-box" type="text"  name="message" placeholder='Send me a message...' required/>
    <input id='email-box' name="email" placeholder='Your email address' required />
    <input id='send-btn' type="submit" value="Send" />
    </form>
}


export default ContactForm;