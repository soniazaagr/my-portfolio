import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(false);
    setIsError(false);

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="scroll-mt-16 text-white bg-[#1f1f29] p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 border-b border-pink-600 w-fit">Contact Me</h2>

      {/* All content stacked vertically now */}
      <div className="space-y-8">
        {/* Contact Info */}
        <div className="space-y-4 text-sm text-gray-300">
          <div className="flex items-center gap-3">
            <FaPhone className="text-pink-500" />
            <span>+92 307-1575764</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-pink-500" />
            <span>muhammadjafirnawab@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-pink-500" />
            <span>Punjab, Pakistan</span>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="access_key" value="6c113600-c634-4ca8-a695-ed042c163405" />
          <input type="hidden" name="subject" value="New Contact Form Submission" />
          <input type="hidden" name="from_name" value="Jafir Nawab Portfolio" />
          <input type="hidden" name="redirect" value="https://your-portfolio.com/thank-you" />

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-[#2d2d3a] text-sm text-white placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-[#2d2d3a] text-sm text-white placeholder-gray-400"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded-md bg-[#2d2d3a] text-sm text-white placeholder-gray-400"
          ></textarea>

          <div className="space-y-2">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 transition px-6 py-2 rounded-full text-white font-medium"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {isSubmitted && (
              <p className="text-green-400 text-sm">✅ Your message has been sent!</p>
            )}
            {isError && (
              <p className="text-red-400 text-sm">❌ Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
