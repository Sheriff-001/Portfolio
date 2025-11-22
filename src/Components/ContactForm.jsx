import React from "react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

function ContactForm() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    text: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const waLink = 'https://wa.me/09162226743'

    const final = `${waLink}?text=Hello my name is: ${form.name} \n Email: ${form.email} \n ${form.text}`
    navigate(final)



    




    




    
    
  }

      
      
  return (
    <form className="flex flex-col gap-3 md:gap-6 border border-gray-700 bg-[#16181b] backdrop-blur-sm p-3 md:p-10  rounded-[10px] " onSubmit={handleSubmit}>
      <input
      required
        type="text"
        placeholder="Name"
        className="border border-gray-700 p-2 text-[20px] rounded-md"
        value={form.name}
        onChange={(e) => setForm({...form, name: e.target.value})}
      />
      <input
      required
        type="email"
        placeholder="Email"
        className="border border-gray-700 p-2 text-[20px] rounded-md"
        value={form.email}
        onChange={(e) => setForm({...form, email: e.target.value})}
      />
      <textarea
      required
        placeholder="Message"
        className=" min-h-30 border border-gray-700 p-2 text-[20px] md:w-100 rounded-md resize-none"
        value={form.text}
        onChange={(e) => setForm({...form, text: e.target.value})}
      ></textarea>
      <button
        className="
  relative px-6 py-3 rounded-md text-[20px] font-semibold text-white
  bg-linear-to-r from-[#3f3ffd] via-[#7a32ff] to-[#ff2ec1]
  overflow-hidden
  hover:scale-105 duration-500
"
      >
        <span className="relative z-10">Send Message</span>
      </button>
    </form>
  );
}

export default ContactForm;
