import React, { useState } from "react";
import LifeChronometer from "../component/LifeChronometer";
import { Send,CheckCircle, AlertCircle, } from "lucide-react";
import { Buttons } from "../shared-items/Buttons";
import emailjs from "@emailjs/browser";
const ContactUs = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
 
  const[isLoading,setIsLoading]=useState(false)
  const[submitStatus,setSubmitStatus]=useState({
    type:null,
    message:""
  })

  const handlesubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setformData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contactus" className="min-h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-around min-h-screen w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>

          <p className="text-muted-foreground">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left */}
          <div>
            <LifeChronometer />
          </div>

          {/* Form */}
          <div className="border-2 glass p-8 rounded-3xl border-primary/30">
            <form onSubmit={handlesubmit} className="flex flex-col space-y-5">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Name</label>
                <input
                  placeholder="type your name here..."
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setformData({ ...formData, name: e.target.value })
                  }
                  className="lg:w-xl cursor-target w-full px-4 py-3 bg-surface rounded-xl border border-border transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Email</label>
                <input
                  placeholder="type your email here..."
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setformData({ ...formData, email: e.target.value })
                  }
                  className="lg:w-xl cursor-target w-full px-4 py-3 bg-surface rounded-xl border border-border transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Message</label>
                <textarea
                  placeholder="type your message here..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setformData({ ...formData, message: e.target.value })
                  }
                  className="lg:w-xl cursor-target w-full px-4 py-3 bg-surface rounded-xl border border-border transition-all focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                />
              </div>

              <Buttons
                className="w-full cursor-target"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Buttons>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
