import { Code2, GitBranch, Layout, Palette, Braces } from "lucide-react";

export default function SkillsCarousel() {
  const skills = [
    { name: "HTML", icon: <Braces className="w-8 h-10 text-orange-500" /> },
    { name: "CSS", icon: <Palette className="w-8 h-10 text-blue-400" /> },
    { name: "React", icon: <Layout className="w-8 h-10 text-indigo-400" /> },
    { name: "Tailwind CSS", icon: <Palette className="w-8 h-10 text-cyan-400" /> },
    { name: "JavaScript", icon: <Code2 className="w-8 h-10 text-yellow-400" /> },
    { name: "Git & GitHub", icon: <GitBranch className="w-8 h-10 text-orange-400" /> },
    { name: "TypeScript", icon: <Code2 className="w-8 h-10 text-blue-400" /> },
    { name: "Responsive Design", icon: <Layout className="w-8 h-10 text-green-400" /> },
  ];

  return (
    <section className="w-full py-10 text-gray-200 overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-[18px] font-bold text-white mb-5">
          Skills & Tools
        </h2>
 
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
  <div className="mx-auto max-w-4xl flex animate-scroll gap-6">
    {skills.concat(skills).map((skill, index) => (
      <div
        key={index}
        className="shrink-0 md:w-36 w-20 p-2 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700 text-center"
      >
        {skill.icon}
        <p className="mt-3 text-[13px] font-semibold text-gray-300">
          {skill.name}
        </p>
      </div>
    ))}
  </div>
</div>

      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateX(-50%);
            opacity: 1;
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
