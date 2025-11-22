import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2, label: "Years of Experience", suffix: "+" },
  { value: 5, label: "Interfaces Crafted", suffix: "+" },
  { value: 80, label: "Client Retention Rate", suffix: "%" },
  { value: 95, label: "Clean Code Score", suffix: "%" },
];
export default function StatsSection() {

  const [visible, setVisible] = useState(stats.map(() => false));
  const [counts, setCounts] = useState(stats.map(() => 0));
  const refs = useRef([]);

  useEffect(() => {
    const observers = refs.current.map((ref, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(prev => {
              const newState = [...prev];
              newState[i] = true;
              return newState;
            });

            // Start count up
            const increment = stats[i].value / 100; // 100 steps
            let current = 0;
            const interval = setInterval(() => {
              current += increment;
              if (current >= stats[i].value) {
                current = stats[i].value;
                clearInterval(interval);
              }
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[i] = current;
                return newCounts;
              });
            }, 20); // 20ms per step

            observer.unobserve(ref);
          }
        },
        { threshold: 0.3 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section className=" md:py-20 text-white py-2 ">
      <div className="w-70 md:w-full md:max-w-6xl mx-auto  md:px-6 grid md:grid-cols-1 grid-cols-1 lg:grid-cols-4 gap-10">
        {stats.map((item, i) => (
          <div
            key={i}
            ref={el => (refs.current[i] = el)}
            className={`
              p-6 bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl
              text-center border border-white/10
              hover:scale-105 transition-transform duration-300
              fade-up ${visible[i] ? "show" : ""}
            `}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <h2 className="md:text-4xl text-3xl font-bold tracking-tight">
              {Math.floor(counts[i])}
              {item.suffix}
            </h2>
            <p className="text-gray-300 mt-2 md:text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
