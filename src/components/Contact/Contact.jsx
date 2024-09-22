import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ propRef }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_93nepq2";
    const templateId = "template_5rsyyjk";
    const publicKey = "CY3CKwRy31vHWPzCD";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      console.log("Email sent successfully", response);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  return (
    <section
      className="content gap-10 w-full max-w-lg scroll-m-[6.25rem] sm:scroll-m-[8.25rem]"
      ref={propRef}
    >
      <div>
        <h2 className="heading-md mb-2">Contact 👋</h2>
        <h3 className="heading-sm leading-snug opacity-60">
          Get in touch with me via email or social media.
        </h3>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fromName" className="text-xs font-medium">
            Name
          </label>
          <input
            name="fromName"
            type="text"
            value={name}
            className="w-full p-2 text-sm rounded-md border border-solid border-black/10"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fromEmail" className="text-xs font-medium">
            Email
          </label>
          <input
            name="fromEmail"
            type="email"
            value={email}
            className="w-full p-2 text-sm rounded-md border border-solid border-black/10"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message" className="text-xs font-medium">
            Message
          </label>
          <textarea
            name="message"
            value={message}
            className="w-full p-2 text-sm rounded-md border border-solid border-black/10"
            rows="5"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="primary-button self-end">
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
