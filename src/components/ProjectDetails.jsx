import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative w-[90vw] max-w-xl md:max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-3 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl max-h-56 md:max-h-80 object-cover" />
        <div className="p-4 md:p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}
          <div className="flex flex-col gap-4 mt-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-3">
                {tags.map((tag) => {
                  const name = (tag.name || "").toLowerCase();
                  // Prefer icons from public/assets/myskills when available
                  const skillMap = {
                    react: "/assets/myskills/react-logo-svgrepo-com.svg",
                    "node": "/assets/myskills/node-js-svgrepo-com.svg",
                    "node.js": "/assets/myskills/node-js-svgrepo-com.svg",
                    mongodb: "/assets/myskills/mongodb-svgrepo-com.svg",
                    express: "/assets/myskills/express-svgrepo-com.svg",
                    javascript: "/assets/myskills/js-svgrepo-com.svg",
                    js: "/assets/myskills/js-svgrepo-com.svg",
                    html: "/assets/myskills/html-5-svgrepo-com.svg",
                    html5: "/assets/myskills/html-5-svgrepo-com.svg",
                    css: "/assets/myskills/css-3-svgrepo-com.svg",
                    css3: "/assets/myskills/css-3-svgrepo-com.svg",
                    python: "/assets/myskills/python-svgrepo-com.svg",
                    postgres: "/assets/myskills/postgresql-svgrepo-com.svg",
                    postgresql: "/assets/myskills/postgresql-svgrepo-com.svg",
                    socket: "/assets/myskills/socket-dot-io-svgrepo-com.svg",
                  };

                  let src = tag.path || "";
                  // pick best match from skillMap
                  if (name.includes("react")) src = skillMap.react;
                  else if (name.includes("node")) src = skillMap.node;
                  else if (name.includes("mongo")) src = skillMap.mongodb;
                  else if (name.includes("express")) src = skillMap.express;
                  else if (name.includes("socket")) src = skillMap.socket;
                  else if (name.includes("python")) src = skillMap.python;
                  else if (name.includes("post")) src = skillMap.postgresql;
                  else if (name.includes("html")) src = skillMap.html;
                  else if (name.includes("css")) src = skillMap.css;
                  else if (name.includes("chart") || name.includes("js") || name.includes("javascript"))
                    src = skillMap.javascript;

                  return (
                    <img
                      key={tag.id}
                      src={src}
                      alt={tag.name}
                      className="rounded-lg size-10 hover-animation"
                    />
                  );
                })}
              </div>
            <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium cursor-pointer hover-animation text-sm md:text-base">
              View Project
              <img src="assets/arrow-up.svg" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
