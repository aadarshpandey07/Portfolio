import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-col items-center gap-4 pb-4 text-sm text-neutral-400 c-space md:flex-row md:justify-between">
      <div className="mb-2 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2 justify-center">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3 justify-center">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p className="text-center">© 2025 Aadarsh. All rights reserved.</p>
    </section>
  );
};

export default Footer;
