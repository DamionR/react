import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic (e.g., send email)
    // Clear form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact-form bg-gray-100 px-4 py-8 rounded shadow-md">
      <h2>Contact Me</h2>
      <p>Feel free to reach out if you have any questions or project inquiries.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-2 text-gray-700 font-bold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
          required
        />
        <label htmlFor="email" className="block mb-2 text-gray-700 font-bold mt-4">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
          required
        />
        <label htmlFor="message" className="block mb-2 text-gray-700 font-bold mt-4">
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
          required
        />
        <button type="submit" className="bg-primary text-white py-2 px-4 rounded mt-4 focus:outline-none hover:bg-opacity-75">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
