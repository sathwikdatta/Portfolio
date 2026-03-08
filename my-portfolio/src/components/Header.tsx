import SideBar from "./SideBar";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { useEffect, useState } from "react";

const links=["About","Projects","Skills","Experience","Contact"];
const navLinks=(col:Boolean, clicked:any)=>{
    const handleClick=()=>{
        if(clicked)clicked();
    }
    return links.map((link, index)=>{
        return  <a key={index} onClick={handleClick} className={`${col?'flex flex-col items-center':''} text-textColor text-[1.05rem] font-mono font-semibold tracking-wide hover:text-primaryColor transition-colors`} href={`#${link}`}><span className="text-primaryColor">0{index+1}. </span>{link}</a>
    })
}

const Header=()=>{
    const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [shadow, setShadow] = useState(false);
    const controlNavbar = () => {
        if(window.scrollY>lastScrollY && window.scrollY>70)setShow(false);
        else setShow(true);
        if(window.scrollY>70)setShadow(true);
        else setShadow(false);
        setLastScrollY(window.scrollY);
    }
    useEffect(()=>{
        window.addEventListener('scroll', controlNavbar);
        return ()=>window.removeEventListener('scroll', controlNavbar);
    })
return (
    <nav className={`flex ${show?"translate-y-0":"-translate-y-28"} ${shadow?"shadow-[0px_10px_30px_-10px_rgba(6,12,22,0.45)]":""} transition-transform duration-500 ease-in-out fixed w-full z-10 bg-[#0d1a2d]/55 backdrop-blur-md border-b border-white/5 h-28  px-10  justify-between items-center xs-mx:px-4 xs-mx:h-20 `}>

        <div className="relative z-10">
            <div className={`${isMobile ? "w-11 h-11" : "w-14 h-14"} absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-teal-300 via-cyan-300 to-emerald-400 blur-[6px] opacity-55`}></div>
            <div className={`${isMobile ? "w-11 h-11 text-base" : "w-14 h-14 text-xl"} relative rounded-2xl bg-[#0d1b31] border border-primaryColor/70 text-primaryColor flex items-center justify-center font-extrabold tracking-tight shadow-[0_0_18px_0_#2DD4BF70]`}>
                SD
            </div>
        </div>
        <div className="bs:flex gap-8 hidden">
            {navLinks(false, null)}
        </div>
        <SideBar/>
    </nav>
);
}
export default Header;
export {navLinks};
