import React from 'react';
import './App.css';
function ContactMe() {
    return (
        // <div>
        //     <p className='para'>
        //         Here's this awesome webform to reach out to me
        //     </p>
        //     <form action="/action_page.php">
        //     <label className='para'>Your Name</label>
        //     <input type="text"id="fname"name="firstname"placeholder="Your name.."/>
        //     <label className='para'> Last Name</label>
        //     <input type="text"id="lname"name="lastname"placeholder="Your last name.."/>
        //     <label className='para'> Email </label>
        //     <input type="email"id="email"name="email"placeholder="Your email"/>
        //     <label className='para'>Subject</label>
        //     <textarea id="subject"name="subject"placeholder="Write something.."></textarea>
        //     <input type="submit"value="Submit😀"/>
        //     </form>
        // </div>
        <form name = "contact" methods = "POST" data-netlify="true">
             <p className='para'>
            Here's this awesome webform to reach out to me
            </p>
            <p className = "para">
                <label> Your Name: <input type = "text" name="name" /> </label>
            </p>
            <p className = "para">
                <label>Email: <input type = "email" name ="email"/></label>
            </p>
            <p className = "para">
                <label> Message: <textarea name = "message"></textarea></label>
            </p>
            <p className = "para">
                <button type = "submit"> Submit </button>
            </p>
        </form>
    );
}

export default ContactMe;