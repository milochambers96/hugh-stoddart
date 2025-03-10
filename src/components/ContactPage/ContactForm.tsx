import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      setIsSubmitting(true);
      setError("");

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      form.current.reset();
    } catch (err: unknown) {
      setError("Failed to send message. Please try again.");
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {!isSuccess && (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 p-6 bg-hs-card rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-hs-subtitle text-lg font-body mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 rounded bg-white/10 text-hs-body font-interactive border border-white/20 focus:border-white/50 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-hs-subtitle text-lg font-body mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 rounded bg-white/10 text-hs-body font-interactive border border-white/20 focus:border-white/50 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-hs-subtitle text-lg font-body mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full p-2 rounded bg-white/10 text-hs-body font-interactive border border-white/20 focus:border-white/50 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-hs-subtitle text-lg font-body mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full p-2 rounded bg-white/10 text-hs-body font-interactive border border-white/20 focus:border-white/50 outline-none resize-none"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-1/3 py-2 px-4 rounded-lg font-semibold font-interactive text-hs-button-text uppercase transition-all bg-hs-button hover:bg-hs-button-hover active:scale-95 shadow-md"
            >
              {isSubmitting
                ? "Sending...".toLocaleUpperCase()
                : "Send Message".toLocaleUpperCase()}
            </button>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-500/20 text-red-200 rounded">
              {error}
            </div>
          )}
        </form>
      )}

      {isSuccess && (
        <div className="md:mt-40 space-y-4 md:space-y-10 flex flex-col items-center bg-hs-card py-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          <div className="w-2/3 p-4 bg-green-900/70 text-green-200 rounded">
            <p>
              Thank you for your message. Hugh will get back to you as soon as
              possible.
            </p>
          </div>
          <button
            onClick={() => setIsSuccess(false)}
            className="w-2/3 py-2 px-4 rounded-lg font-semibold font-interactive text-hs-button-text uppercase transition-all bg-hs-button hover:bg-hs-button-hover active:scale-95 shadow-md"
          >
            SEND ANOTHER MESSAGE
          </button>
        </div>
      )}
    </>
  );
};

export default ContactForm;
