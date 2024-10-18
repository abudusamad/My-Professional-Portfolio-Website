import { Metadata } from "next";
import Contact from "./_components/contact";

export const metadata: Metadata = {
  title: "contact",
  description:
    "Get in touch with me to discuss potential collaborations, job opportunities, or any inquiries you may have. I'm always open to connecting with like-minded professionals and exploring new opportunities.",
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
