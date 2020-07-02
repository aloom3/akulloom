import React from 'react';
import './App.css';

function ContactMe() {
    return (
        <div>
            <p className='para'>
                Here's this awesome webform to reach out to me
            </p>
            <form action="/action_page.php">
            <label className='para'>Your Name</label>
            <input type="text"id="fname"name="firstname"placeholder="Your name.."/>
            <label className='para'> Last Name</label>
            <input type="text"id="lname"name="lastname"placeholder="Your last name.."/>
            <label className='para'> Email </label>
            <input type="email"id="email"name="email"placeholder="Your email"/>
            <label className='para'>Subject</label>
            <textarea id="subject"name="subject"placeholder="Write something.."></textarea>
            <input type="submit"value="Submit😀"/>
            </form>
        </div>
    );
}

export default ContactMe;