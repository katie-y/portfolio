import React from 'react';
import ContactForm from './contactForm';

const Contact = () => {
    return <div className='contact-section'>
    <div className ='contact-background'>
    <div id='contact-jump-to'></div>
    <h3 id='contact-header'>I'd love to hear from you!</h3>
    <ContactForm />
    </div>
</div>
}

export default Contact;