import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "src/components/LoadingAnimation";
import InputField from "src/features/Contact/InputField";
import ErrorMessage from "src/features/Contact/ErrorMessage";
import { sendEmail } from "src/features/Contact/api/send-email";
import { validateContactForm } from "src/features/Contact/utils/validate-contact-form";
import ScrollToSection from "src/components/ScrollToSection";

const Contact = ({ propRef }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input change and update formData
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const formErrors = useMemo(() => validateContactForm(formData), [formData]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
      }

      setLoading(true);

      try {
        const response = await sendEmail(formData);
        console.log("Email sent successfully", response);
        navigate("/status", { state: { isSuccess: true } });
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } catch (error) {
        console.error("Error sending email", error);
        navigate("/status", { state: { isSuccess: false } });
      } finally {
        setLoading(false);
      }
    },
    [formData, formErrors, navigate]
  );

  return (
    <ScrollToSection propRef={propRef}>
      <div className="w-full max-w-md m-auto">
        <h2 className="heading-md uppercase text-center">Say Hello 👋</h2>
        <h3 className="heading-sm leading-snug mt-2 text-center opacity-60">
          Get in touch with me via email or social media.
        </h3>
        <form
          noValidate
          className="flex flex-col mt-10"
          onSubmit={handleSubmit}
        >
          <InputField
            name="name"
            label="Name"
            value={formData.name}
            error={errors.name}
            onChange={handleInputChange}
          />
          <InputField
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            error={errors.email}
            onChange={handleInputChange}
          />
          <div className="w-full">
            <label htmlFor="message" className="text-xs font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              autoComplete="off"
              className={`block w-full p-2 text-sm rounded-md border border-solid bg-transparent ${
                errors.message ? "border-red" : "border-black/10"
              }`}
              rows="5"
              onChange={handleInputChange}
            ></textarea>
            {errors.message && <ErrorMessage message={errors.message} />}
          </div>
          <button
            type="submit"
            className="primary-button flex items-center justify-center w-full sm:w-40 mt-10 self-center"
            disabled={loading}
          >
            {loading ? <LoadingAnimation /> : "Send message"}
          </button>
        </form>
      </div>
    </ScrollToSection>
  );
};

export default Contact;
