import ContactForm from "./ContactForm";

const ContactShell = () => {
  return (
    <section className="pt-[90px] pb-20">
      <article className="max-w-2xl mx-auto p-6 mt-10">
        <div className="space-y-6 mb-6 md:mb-12 text-center">
          <h1 className="text-3xl md:text-5xl text-hs-title font-bold font-title">
            Contact
          </h1>
          <h2 className="text-xl md:text-2xl text-hs-subtitle font-semibold font-body">
            Complete the form below to get in touch with Hugh
          </h2>
        </div>
        <ContactForm />
      </article>
    </section>
  );
};

export default ContactShell;
