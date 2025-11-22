import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Project from "../Components/Project";

function MoreProject() {
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
      <div className="  my-20 flex items-center justify-center flex-col text-center mx-15">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Projects
          </h2>
          <p className=" text-gray-300 leading-relaxed text-lg">
            Crafted with precision. Built for real users.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-7 md:p-20 py-10 mx-10 md:mx-15">
        <Project
          image="../assets/bg-portfolio.png"
          name="My Portfolio"
          desc={"Turn your ideas into reality, just a message away."}
          ghLInk={"/"}
          icons={[
            "bx bxc bxl-react",
            "bx bxc bxl-javascript",
            "bx bxc bxl-tailwind-css",
          ]}
          liveLink={"/"}
        />
        <Project
          image="../assets/bg-cinevault.png"
          name="Cine Vault"
          desc={
            "A visually rich plartform that combines comprehensive film data for users."
          }
          ghLInk={"/"}
          icons={[
            "bx bxc bxl-html5 ",
            "bx bxc bxl-css3",
            "bx bxc bxl-javascript",
          ]}
          liveLink={"/"}
        />
        <Project
          image="../assets/bg-wanderlust.png"
          name="WanderLust Explorer"
          desc={
            "A web app for countries information, tourism or adventure planning."
          }
          ghLInk={"/"}
          icons={[
            "bx bxc bxl-html5 ",
            "bx bxc bxl-css3",
            "bx bxc bxl-javascript",
          ]}
          liveLink={"/"}
        />

        <Project
          image="../assets/bg-tutorstater.png"
          name="TutorStarter"
          desc={"Platform for a wide range of Learning outside the classroom"}
          ghLInk={"/"}
          icons={["bx bxc bxl-html5 ", "bx bxc bxl-css3"]}
          liveLink={"/"}
        />
        <Project
          image="../assets/bg-easybanking.png"
          name="Easy Bank"
          desc={
            "Manage your savings, investments, pension, and much more from one account."
          }
          ghLInk={"/"}
          icons={["bx bxc bxl-html5 ", "bx bxc bxl-css3"]}
          liveLink={"/"}
        />
        <Project
          image="../assets/bg-gameblog.png"
          name="Game Blog"
          desc={
            "Lattest news, trends, gaming hacks / tips, e.t.c. We got you covered."
          }
          ghLInk={"/"}
          icons={["bx bxc bxl-html5 ", "bx bxc bxl-css3"]}
          liveLink={"/"}
        />
      </div>
      <div className="flex justify-center mb-20">
        <Link className="self-center" to="/">
          <button
            className="
        relative px-3 py-1 md:px-6 md:py-3 rounded-4xl text-[13px] md:text-[15px] font-semibold text-white
        bg-linear-to-r from-[#076af7]  to-[#4824e9]
        overflow-hidden
        hover:scale-105 duration-500 w-40
      "
          >
            Go Back Home
          </button>
        </Link>
      </div>
    </>
  );
}

export default MoreProject;
