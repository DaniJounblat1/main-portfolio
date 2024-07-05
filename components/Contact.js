import React from "react";

const ContactForm = () => {
    return (
        <section id="contact" className="contact-page">
            <h1 className="mainTitle">Contact Me</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name" className="label">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="label">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="label">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default ContactForm;
