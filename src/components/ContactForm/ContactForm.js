import React, { useState } from 'react';
import './ContactForm.css'
import ContactBar from './ContactBar';

const ContactForm = ({ hideContact }) => {
    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        };
        const handleError = (response) => {
            if(!response.ok) throw Error(response.statusText);
            return response;
        }
        await fetch("https://formspree.io/f/mwkanqgj", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        })
            .then(handleError)
            .then(() => alert("Message sent. Thanks for visiting!"))
            .catch(error => alert(error));
        setStatus("Submit");
    };

    return (
        <div className="modal" id="modal">
            { // Close modal via hideContact method when Esc is pressed
                document.addEventListener('keydown', (event) => {
                    if(event.key === "Escape")
                        hideContact();
            })}
            <div className="cusBD br4">
                <p className="top-0 right-0 pointer f4 hover-bg-silver no-underline grow dib v-mid bg-light-blue ph3 pv2 black closeBtn br-100 white fixed" onClick={() => hideContact()}>&#10006;</p>
                <div>
                    <p className="ma1 f2 b">Contact Me!</p>
                    <hr class="w-100 mw4 bb bw1 b--black-10"/>
                </div>
                <form id="fs-frm" className="ba w-50 bg-light-gray" onSubmit={handleSubmit}>
                    <div className="tl" id="fs-frm-inputs">
                        <label className="mt3 mb1 w-100" htmlFor="name">Name</label>
                            <input className="f4 pa2 ba bw1 br3 b--light-gray h3 w-100" type="text" name="name" id="name" placeholder="First and Last" required/>
                        <label className="mt3 mb1 w-100" htmlFor="email">Email Address</label>
                            <input className="f4 pa2 ba bw1 br3 b--light-gray h3 w-100" type="email" name="email" id="email" placeholder="email@domain.tld" required/>
                        <label className="mt3 mb1 w-100" htmlFor="message">Message</label>
                            <textarea className="cusMB pa2 ba bw1 br3 b--light-gray w-100"  rows="5" name="message" id="message" placeholder="" required/>
                        <div className="tc mt3">
                            <button className="ba2 b--solid b--white f2 no-underline  grow hover-bg-silver dib v-mid bg-light-blue black ph4 pv2 mb3 mt3 ml2 mr2 br-pill white pointer" type="submit">{status}</button>
                        </div>
                    </div>
                </form>
                <div className="fixed left-0 right-0 bottom-2">
                    <ContactBar />
                </div>
            </div>   
        </div>
    );
}

export default ContactForm;
