import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        "service_w31gsbx",
        "template_3h0x80a",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "HPM2DVVWUBaL3jtyo"
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!", {
          position: "top-right",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      toast.error("Error sending message. Please try again.", {
        position: "top-right",
      });
      console.error("Error sending email:", error);
    }
  };

  return (
    <section id="contact" className="bg-[#1f2235] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Contact <span className="text-[#f84e54]">Me</span>
        </h2>
        <div className="w-16 h-1 bg-[#f84e54] mx-auto mt-2"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 bg-[#1f2235] text-white border border-white rounded-md focus:outline-none focus:border-[#f84e54] transition duration-300"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 bg-[#1f2235] text-white border border-white rounded-md focus:outline-none focus:border-[#f84e54] transition duration-300"
              placeholder="Email"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-4 bg-[#1f2235] text-white border border-white rounded-md focus:outline-none focus:border-[#f84e54] transition duration-300"
            placeholder="Subject"
            required
          />
          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 bg-[#1f2235] text-white border border-white rounded-md focus:outline-none focus:border-[#f84e54] transition duration-300"
            placeholder="Your Message"
            required
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto py-3 px-6 bg-[#f84e54] cursor-pointer text-white font-semibold rounded-md hover:bg-white hover:text-[#e74c3c] transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
