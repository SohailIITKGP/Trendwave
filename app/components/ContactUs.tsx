"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          contactNo: formData.phoneNumber,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (typeof window !== "undefined") {
          const dataLayer = (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer;
          dataLayer?.push({ event: "contact_form_submit" });
        }
        toast.success("Thank you! We'll get back to you soon.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({ fullName: "", phoneNumber: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch {
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative isolate w-full overflow-hidden bg-[#6f8fe8] py-12 sm:py-14 lg:py-16 xl:py-20 2xl:py-24">
      <img
        src="/Contact.webp"
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover object-[66%_center] sm:object-[44%_center] xl:object-[28%_center]"
        loading="lazy"
        aria-hidden="true"
      />

      <div className="absolute inset-0 z-10 bg-[#154df5] opacity-[0.78]" aria-hidden="true" />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            input:-webkit-autofill:active,
            textarea:-webkit-autofill,
            textarea:-webkit-autofill:hover,
            textarea:-webkit-autofill:focus,
            textarea:-webkit-autofill:active {
              -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
              box-shadow: 0 0 0 30px #ffffff inset !important;
              -webkit-text-fill-color: #000000 !important;
            }
          `,
        }}
      />
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="text-white lg:order-2">
            <h2 className="text-[clamp(2rem,5vw,3.9rem)] font-bold leading-[1.08] tracking-[-0.02em]">
              <span className="block">Need a solution?</span>
              <span className="block">Let&rsquo;s talk</span>
            </h2>

            <p className="mt-5 max-w-2xl text-[clamp(1rem,2vw,1.35rem)] leading-[1.65] text-white/95">
              Whether you need software development, IT infrastructure setup or security systems, our team is ready to understand your needs and suggest the right approach.
            </p>

            <ul className="mt-7 space-y-3 text-lg font-semibold leading-7 sm:text-xl">
              <li>Quick response</li>
              <li>Experience Team</li>
              <li>End-to-end execution</li>
            </ul>
          </div>

          <div className="w-full max-w-lg rounded-[28px] border border-white/35 bg-white/95 p-5 shadow-[0_24px_46px_rgba(10,28,72,0.32)] backdrop-blur-[2px] sm:p-6 lg:order-1 lg:mr-auto lg:p-7">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  maxLength={120}
                  className="h-11 w-full border-b border-[#b8bfcc] bg-transparent px-0 text-[17px] text-black placeholder:text-[#5b7296] focus:border-[#7c8da8] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  autoComplete="tel"
                  required
                  maxLength={20}
                  className="h-11 w-full border-b border-[#b8bfcc] bg-transparent px-0 text-[17px] text-black placeholder:text-[#5b7296] focus:border-[#7c8da8] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  maxLength={254}
                  className="h-11 w-full border-b border-[#b8bfcc] bg-transparent px-0 text-[17px] text-black placeholder:text-[#5b7296] focus:border-[#7c8da8] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={4000}
                  minLength={10}
                  className="w-full resize-none border-b border-[#b8bfcc] bg-transparent px-0 py-2 text-[17px] text-black placeholder:text-[#5b7296] focus:border-[#7c8da8] focus:outline-none transition-colors"
                />
              </div>

              <div className="mt-1 flex w-full justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-10 w-fit items-center justify-center rounded-xl bg-[#154df5] px-5 text-base font-semibold leading-none text-white transition-all duration-200 hover:bg-[#103ab5] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
