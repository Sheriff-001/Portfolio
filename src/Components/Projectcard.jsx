import React, { useEffect, useRef } from "react";
import Project from "./Project";


function Projectcard() {


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
      <div ref={ref} className=" fade-right grid md:grid-cols-3 gap-7 md:p-20 py-10">
        <Project image="../assets/bg-portfolio.png" name="My Portfolio" desc={"Turn your ideas into reality, just a message away."} ghLInk={'/'} icons={['bx bxc bxl-react','bx bxc bxl-javascript','bx bxc bxl-tailwind-css']} liveLink={'/'}/>
        <Project image="../assets/bg-cinevault.png" name="Cine Vault" desc={"A visually rich plartform that combines comprehensive film data for users."} ghLInk={'/'} icons={['bx bxc bxl-html5 ','bx bxc bxl-css3','bx bxc bxl-javascript',]} liveLink={'/'}/>
        <Project image="../assets/bg-wanderlust.png" name="WanderLust Explorer" desc={"A web app for countries information, tourism or adventure planning."} ghLInk={'/'} icons={['bx bxc bxl-html5 ','bx bxc bxl-css3','bx bxc bxl-javascript',]} liveLink={'/'}/>

        <Project image="../assets/bg-tutorstater.png" name="TutorStarter" desc={"Platform for a wide range of Learning outside the classroom"} ghLInk={'/'} icons={['bx bxc bxl-html5 ','bx bxc bxl-css3',]} liveLink={'/'}/>
        <Project image="../assets/bg-easybanking.png" name="Easy Bank" desc={"Manage your savings, investments, pension, and much more from one account."} ghLInk={'/'} icons={['bx bxc bxl-html5 ','bx bxc bxl-css3',]} liveLink={'/'}/>
        <Project image="../assets/bg-gameblog.png" name="Game Blog" desc={"Lattest news, trends, gaming hacks / tips, e.t.c. We got you covered."} ghLInk={'/'} icons={['bx bxc bxl-html5 ','bx bxc bxl-css3',]} liveLink={'/'}/>

      </div>
    </>
  );
}

export default Projectcard;
