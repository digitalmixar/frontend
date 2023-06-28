import { ButtonContent } from "@/components/elements/button";
import React from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

/**
 * @param {{
 *  data: {
 *    heading: string,
 * }}} props - props
 * @returns JSX.Element
 */
const Contact = ({ data }) => {
  return (
    <section
      className="relative overflow-hidden bg-primary-900 py-24 text-primary-100"
      id="contact"
    >
      <div className="container px-12">
        {/* two columns layout */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* left column */}
          <div className="flex flex-col">
            <h2 className="mb-4 text-5xl font-bold">{data.heading}</h2>
            <p className="mb-4 text-xl">
              If you have a digital project that could have a significant impact
              on your company's financial future, let us know and we'll schedule
              a call to help you estimate the ROI for free.
            </p>
          </div>
          {/* right column */}
          <div className="flex flex-col justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const recaptchaRef = React.useRef(null);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    data._recaptcha = await recaptchaRef.current.executeAsync();
    const response = await fetch("/api/send-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      form.reset();
    } else {
      form.setError("message", {
        type: "manual",
        message: "Error sending message",
      });
      alert("Error sending message");
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col justify-center text-primary-925"
    >
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        size="invisible"
      />
      <input
        type="text"
        name="name"
        id="name"
        className="mb-4 rounded-3xl bg-primary-50 py-2 px-8"
        {...form.register("name")}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        id="email"
        className="mb-4 rounded-3xl bg-primary-50 py-2 px-8"
        {...form.register("email")}
        placeholder="Email"
      />
      <input
        type="tel"
        name="phone"
        id="phone"
        className="mb-4 rounded-3xl bg-primary-50 py-2 px-8"
        {...form.register("phone")}
        placeholder="Phone"
      />
      <textarea
        name="message"
        id="message"
        className="mb-4 mt-6 h-48 rounded-3xl bg-primary-50 py-6 px-8"
        {...form.register("message")}
        placeholder="Message"
      />
      <div className="flex">
        {form.formState.isSubmitting && (
          <div className="mr-4 h-12 w-12 animate-spin">
            {/* circular loading spinner */}
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.26074 12.4006C4.7236 17.6596 1.97998 24.5094 1.97998 32.0001C1.97998 39.4907 4.7236 46.3405 9.26074 51.5995V48.3753C5.93784 43.7694 3.97998 38.1134 3.97998 32.0001C3.97998 25.8868 5.93784 20.2307 9.26074 15.6248V12.4006Z"
                fill="white"
              />
            </svg>
          </div>
        )}
        {form.formState.isSubmitSuccessful && (
          <span className="mr-4 text-primary-200">Message sent!</span>
        )}
        <button type="submit" className="ml-auto">
          <ButtonContent appearance={"dark"}>
            <span className="text-xl">Send</span>
          </ButtonContent>
        </button>
      </div>
    </form>
  );
};

export default Contact;
