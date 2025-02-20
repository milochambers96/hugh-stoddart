import ContactForm from "./ContactForm";

const ContactShell = () => {
  return (
    <section className="pt-[90px] pb-20">
      <article className="max-w-2xl mx-auto p-6 mt-10">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-8 md:mb-14 text-center">
          Get in touch with Hugh
        </h1>
        <ContactForm />
      </article>
    </section>
  );
};

export default ContactShell;
