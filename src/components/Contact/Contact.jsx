import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import AlertIcon from "../../assets/icons/alert-icon.svg";
import LoadingAnimation from "../Shared/LoadingAnimation";

const Contact = ({ propRef }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "fromName") setName(value);
    if (name === "fromEmail") setEmail(value);
    if (name === "message") setMessage(value);
  };

  const validate = useCallback(() => {
    let formErrors = {};
    if (!name) formErrors.name = "Name can't be empty";
    if (!email) {
      formErrors.email = "Email can't be empty";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid";
    }
    if (!message) formErrors.message = "Message can't be empty";

    return formErrors;
  }, [name, email, message]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const formErrors = validate();

      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
      }

      setLoading(true);

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
        navigate("/status", { state: { isSuccess: true } });
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      } catch (error) {
        console.error("Error sending email", error);
        navigate("/status", { state: { isSuccess: false } });
      } finally {
        setLoading(false);
      }
    },
    [name, email, message, validate, navigate]
  );

  const ErrorMessage = ({ message }) => {
    return (
      <p className="flex flex-row items-center text-xs text-red-500 mt-1 gap-1 font-medium">
        <img src={AlertIcon} className="h-4 inline-block" /> {message}
      </p>
    );
  };

  return (
    <section
      className="content gap-10 w-full max-w-lg scroll-m-[6.25rem] sm:scroll-m-[8.25rem]"
      ref={propRef}
    >
      <div>
        <h2 className="heading-md mb-2">Say hello! 👋</h2>
        <h3 className="heading-sm leading-snug opacity-60">
          Get in touch with me via email or social media.
        </h3>
      </div>
      <form noValidate className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fromName" className="text-xs font-medium">
            Name
          </label>
          <input
            name="fromName"
            type="text"
            value={name}
            autoComplete="off"
            className={`w-full p-2 text-sm rounded-md border border-solid ${
              errors.name ? "border-red-500" : "border-black/10"
            }`}
            onChange={handleInputChange}
          />
          {errors.name && <ErrorMessage message={errors.name} />}
        </div>
        <div>
          <label htmlFor="fromEmail" className="text-xs font-medium">
            Email
          </label>
          <input
            name="fromEmail"
            type="email"
            value={email}
            autoComplete="off"
            className={`w-full p-2 text-sm rounded-md border border-solid ${
              errors.email ? "border-red-500" : "border-black/10"
            }`}
            onChange={handleInputChange}
          />
          {errors.email && <ErrorMessage message={errors.email} />}
        </div>
        <div>
          <label htmlFor="message" className="text-xs font-medium">
            Message
          </label>
          <textarea
            name="message"
            value={message}
            autoComplete="off"
            className={`block w-full p-2 text-sm rounded-md border border-solid ${
              errors.message ? "border-red-500" : "border-black/10"
            }`}
            rows="5"
            onChange={handleInputChange}
          ></textarea>
          {errors.message && <ErrorMessage message={errors.message} />}
        </div>
        <button
          type="submit"
          className="primary-button flex items-center justify-center sm:w-40 sm:self-end"
          disabled={loading}
        >
          {loading ? <LoadingAnimation /> : "Send message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
