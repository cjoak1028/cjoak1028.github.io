export const validateContactForm = (formData) => {
    const errors = {};
    if (!formData.name) errors.name = "Name can't be empty";
    if (!formData.email) {
      errors.email = "Email can't be empty";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message can't be empty";
    return errors;
  };