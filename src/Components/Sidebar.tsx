import { IoMailOutline, IoLogoWhatsapp, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

function Sidebar() {
  return (
    <div
      className="w-[90px] border-r-[1px] dark:bg-slate-800
    h-screen fixed flex flex-col justify-around items-center mt-[90px]"
    >
      <h2 className="-rotate-90 tracking-widest">HOMEPAGE</h2>
      <div className="flex flex-col gap-2 mb-10 text-[20px]">
        <IoLogoGithub
          onClick={() => {
            window.open("https://github.com/anastasiaastrid", "_blank");
          }}
          className="cursor-pointer hover:scale-110 transition-all ease-in-out"
        />
        <IoLogoLinkedin
          onClick={() => {
            window.open("https://www.linkedin.com/in/anastasia-astrid-84b96aa7/", "_blank");
          }}
          className="cursor-pointer hover:scale-110 transition-all ease-in-out"
        />
        <IoMailOutline
          onClick={() => {
            window.open("https://mail.google.com/mail/u/hasan.astrid@email.com/#inbox?compose=new", "_blank");
          }}
          className="cursor-pointer hover:scale-110 transition-all ease-in-out"
        />
        <IoLogoWhatsapp
          onClick={() => {
            window.open("https://wa.me/6281283838925", "_blank");
          }}
          className="cursor-pointer hover:scale-110 transition-all ease-in-out"
        />
      </div>
    </div>
  );
}

export default Sidebar;
