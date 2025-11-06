import { OrbitingCircles } from "./OrbitingCircles.jsx";

export function Frameworks() {
  // Use user-provided skill icons from public/assets/myskills
  const outerRing = [
    "react-logo-svgrepo-com.svg",
    "node-js-svgrepo-com.svg",
    "express-svgrepo-com.svg",
    "mongodb-svgrepo-com.svg",
    "postgresql-svgrepo-com.svg",
    "socket-dot-io-svgrepo-com.svg",
  ];

  const innerRing = [
    "js-svgrepo-com.svg",
    "html-5-svgrepo-com.svg",
    "css-3-svgrepo-com.svg",
    "python-svgrepo-com.svg",
    "c-plus-plus-svgrepo-com.svg",
    "github-142-svgrepo-com.svg",
    "jb-pycharm-svgrepo-com.svg",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {outerRing.map((file, index) => (
          <img
            key={`outer-${index}`}
            src={`assets/myskills/${file}`}
            className="duration-200 rounded-sm hover:scale-110"
          />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {innerRing.map((file, index) => (
          <img
            key={`inner-${index}`}
            src={`assets/myskills/${file}`}
            className="duration-200 rounded-sm hover:scale-110"
          />
        ))}
      </OrbitingCircles>
    </div>
  );
}

