const Contact = () => {
  return (
    <section className="py-24 flex flex-col gap-10 w-full max-w-lg">
      <div>
        <h2 className="heading-md mb-2">Contact 👋</h2>
        <h3 className="heading-sm leading-snug ">
          Get in touch with me via email or social media.
        </h3>
      </div>
      <form id="contact-form" method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="text-xs font-medium">
            Name
          </label>
          <input
            type="text"
            className="w-full p-2 text-sm rounded-md border border-solid border-black/10 focus:outline-none focus:border-black/80 focus:ring-1 focus:ring-black/80"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="inputEmail" className="text-xs font-medium">
            Email
          </label>
          <input
            type="email"
            className="w-full p-2 text-sm rounded-md border border-solid border-black/10"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="text-xs font-medium">
            Message
          </label>
          <textarea
            className="w-full p-2 text-sm rounded-md border border-solid border-black/10"
            rows="5"
          ></textarea>
        </div>
        <div className="text-end">
          <button
            type="submit"
            className="px-6 h-12 bg-black text-white rounded-full hover:opacity-60 font-medium transition-opacity"
          >
            Send message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
