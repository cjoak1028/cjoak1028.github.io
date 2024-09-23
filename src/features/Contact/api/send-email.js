import emailjs from "@emailjs/browser";

export const sendEmail = async (formData) => {
  const serviceId = "service_93nepq2";
  const templateId = "template_5rsyyjk";
  const publicKey = "CY3CKwRy31vHWPzCD";

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  };

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    return response;
  } catch (error) {
    throw new Error("Error sending email", error);
  }
};