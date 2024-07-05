import React, { useState, useEffect } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await res.json();
        if (res.status === 200) {
            setStatus('Email sent successfully');
            setFormData({ name: '', email: '', message: '' });

            // Reset the form after 5 seconds
            setTimeout(() => {
                setStatus('');
            }, 5000);
        } else {
            setStatus('Error sending email');
        }

        setIsSubmitting(false);
    };

    const handleReset = () => {
        setStatus('');
    };

    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => {
                handleReset();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [status]);

    return (
        <section id="contact" className="contact-page">
            {status && (
                <div className="status-message">
                    <div className="status-content">
                        <p>{status}</p>
                        <button type="button" className="send-button" onClick={handleReset}>
                            OK
                        </button>
                    </div>
                </div>
            )}
            <h1 className="mainTitle">Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="label">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="label">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="label">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="send-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'SEND'}
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
