
function Project({name, desc, icons, liveLink, ghLInk, image }) {
  return (
     <div
          className="flex flex-col  border-gray-700 p-3 rounded-[10px] w-full text-left text-white bg-[#16181b] backdrop-blur-sm border 
              hover:scale-102 transition-transform duration-300 hover:border-blue-500 shadow-glow  "
        >
          <img src={image} className="w-90 mb-5 h-40 object-cover lg:w-auto" />
          <div>
            <h3 className="font-bold text-[20px] text-white">
              {name}
            </h3>
            <p className="text-gray-400">
             {desc}
            </p>
          </div>
          <div className="flex gap-3.5 mb-4.5 mt-2">

            {
              icons.map((icon, index) => (<i key={index} className={icon}></i>) )
            }
            
          </div>
          <div className="flex gap-3.5">
            <a href={liveLink} target="_blank" className="text-blue-500 hover:underline ">
      Live Demo
    </a>
            <a href={ghLInk} target="_blank" className="text-blue-500 hover:underline">
      GitHub
    </a>
          </div>
        </div>
  )
}

export default Project