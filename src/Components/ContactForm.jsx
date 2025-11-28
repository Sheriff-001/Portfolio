import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    text: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  const validateEmail = (email) => {
    const strongEmailRegex =
      /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!strongEmailRegex.test(email)) {
      return { status: "invalid_format" };
    }

    const disposableDomains = [
      "mailinator.com",
      "tempmail.com",
      "10minutemail.com",
      "guerrillamail.com",
      "yopmail.com",
      "fakeinbox.com",
    ];

    const popularDomains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "icloud.com",
      "live.com",
      "proton.me",
    ];

    const domain = email.split("@")[1].toLowerCase();

    if (disposableDomains.includes(domain)) {
      return { status: "disposable_domain" };
    }

    function levenshtein(a, b) {
      const matrix = [];
      for (let i = 0; i <= a.length; i++) matrix[i] = [i];
      for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

      for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
          const cost = a[i - 1] === b[j - 1] ? 0 : 1;
          matrix[i][j] = Math.min(
            matrix[i - 1][j] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j - 1] + cost
          );
        }
      }
      return matrix[a.length][b.length];
    }

    for (let valid of popularDomains) {
      const dist = levenshtein(domain, valid);
      if (dist <= 2) {
        return { status: "typo_suspected", suggestion: valid };
      }
    }

    return { status: "valid" };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailCheck = validateEmail(form.email);

    if (emailCheck.status === "invalid_format") {
      setError("Invalid email format. Please check again.");
      return;
    }

    if (emailCheck.status === "disposable_domain") {
      setError("Disposable or fake email addresses are not allowed.");
      return;
    }

    if (emailCheck.status === "typo_suspected") {
      setError(`Did you mean ${emailCheck.suggestion}?`);
      return;
    }

    setError("");

    const waLink = "https://wa.me/09162226743";
    const final = `${waLink}?text=Hello my name is: ${form.name} \n Email: ${form.email} \n ${form.text}`;
    navigate(final);
  };

  return (
    <form
      ref={formRef}
      className="fade-on-scroll flex flex-col gap-3 md:gap-6 border border-gray-700 bg-[#16181b] backdrop-blur-sm p-3 md:p-10 rounded-[10px]"
      onSubmit={handleSubmit}
    >
      <input
        required
        type="text"
        placeholder="Name"
        className="border border-gray-700 p-2 text-[20px] rounded-md"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        required
        type="text"
        placeholder="Email"
        className="border border-gray-700 p-2 text-[20px] rounded-md"
        value={form.email}
        onChange={(e) => {
          setForm({ ...form, email: e.target.value });
          setError("");
        }}
      />

      {error && (
        <p className="text-red-500 text-[14px] -mt-2 error-animate">{error}</p>
      )}

      <textarea
        required
        placeholder="Message"
        className="min-h-30 border border-gray-700 p-2 text-[20px] md:w-100 rounded-md resize-none"
        value={form.text}
        onChange={(e) => setForm({ ...form, text: e.target.value })}
      ></textarea>

      <button
        className="relative px-6 py-3 rounded-md text-[20px] font-semibold text-white
        bg-linear-to-r from-[#3f3ffd] via-[#7a32ff] to-[#ff2ec1]
        overflow-hidden hover:scale-105 duration-500"
      >
        <span className="relative z-10">Send Message</span>
      </button>
    </form>
  );
}

export default ContactForm;
