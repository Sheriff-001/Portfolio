import React, { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";


function Contact() {
  const ref = useRef(null);






  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        id="contact"
        ref={ref}
        className="fade-left flex flex-col m-13 md:p-20 text-white text-left md:gap-10"
      >
        
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 ">
            Let's Work Together
          </h2>
          <h3 className="text-gray-400 text-[18px]">
            Feel free to reach out for collaboration or just a friendly chat.{" "}
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-20 justify-between">
          <div className="flex md:flex-col justify-flexstart gap-5">
            <div className="md:flex justify-center gap-7 flex-col hidden">
              <p>
                <i className="bx bxc bx-envelope bc "></i> sheriffaliyu111@gmail.com
              </p>
              <p>
                <i className="bx bxc bxs-phone bc"></i> +234 9162226743
              </p>
              <p>
                <i className="bx bxc bxs-map bc"></i> Jos, Nigeria
              </p>
            </div>
            <div className="flex gap-8 mt-15 justify-center text-center">
              <a href="https://www.linkedin.com/in/sheriff-aliyu-007799391/" target="_blank" aria-label="LinkedIn">
                <i className="bx bxc bxl-linkedin bs"></i>{" "}
              </a>
              <a href="https://web.facebook.com/profile.php?id=61580417475654" target="_blank" aria-label="Facebook">
                <i className="bx bxc bxl-facebook bs"></i>
              </a>
              <a href="https://www.upwork.com/freelancers/~017fad526b4f31a067" target="_blank" aria-label="Upwork">
                <i className="bx bxc bxl-upwork bs"></i>
              </a>
              <a href="https://www.upwork.com/freelancers/~017fad526b4f31a067" target="_blank" aria-label="Telegram">
                <i className='bx bxc  bxl-telegram bs' ></i>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
