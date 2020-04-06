import React from 'react';

const ContactForm = () => {
    return <form className = 'contact-form' action='mailto:katie_york@hotmail.co.uk?subject=Email%20from%20portfolio' method='post'>
    <input id='msg-box' placeholder='Send me a message...' />
    <input id='email-box' placeholder='Your email address' />
    <input id='send-btn' type="submit" value="Send" />
    </form>
}

// use formspree for backend?


export default ContactForm;