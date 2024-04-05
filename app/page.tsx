import Image from "next/image";
import Cloud from "@/public/images/cloud.png";
import Mount from "@/public/images/mountain.png";
import Sai from "@/public/images/saiguna.png";
import Gif from "@/public/images/cat-typing.gif";
import Chilli from "@/public/images/chillies.png"
import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className="bg-[#e4f9f5] min-h-screen relative">
      <div className="pt-[40px] flex justify-end mr-[300px] " data-aos="fade-down" 
     data-aos-duration="1500">
      <Image
      src={Cloud}
      alt="cloud"
      />
      </div>
      <div className="text-center pt-[70px] text-[#66bfbf] " data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
        <h1 className="text-[5.625rem]"> I&apos;m Saiguna </h1>
        <h2 className=" text-[2.5rem] pt-[20px] ">a <span>pro</span>
        grammer.
        </h2>
      </div>
      <div className="pt-[45px] absolute left-[250px] bottom-[300px] " data-aos="fade-right"  data-aos-duration="3000">
      <Image
      src={Cloud}
      alt="cloud"
      />
      </div>
      <div className="flex justify-center" data-aos="zoom-in-up" data-aos-duration="3000">
      <Image
      src={Mount}
      alt="Mountaine"
      />
      </div>
    </div>
    <div className="  mx-0 my-[100px]">
      <div className="text-center items-center flex flex-col">

  <div className="bg-[#c6ccca] h-[180px] w-[180px] rounded-[50%] overflow-hidden  "data-aos="zoom-out" data-aos-duration="1500" data-aos-easing="linear">
<Image src={Sai} alt="saiguna" width={150}  height={100} className=" m-1 mx-2"/> 
  </div>
<h2 className="text-[#66bfbf] text-[2.5rem] p-[20px] pb-8" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in">Hello.</h2>
<p className="w-[30%] leading-[2]" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">I am an Web developer and Android developer.</p>
      </div>
      
        <hr className="border-dotted border-[#eaf6f6] rounded-[50%] border-b-0 mx-auto my-[100px] w-[6%]"/>
        <div>

        <h2 className=" text-[#66bfbf] text-[2.5rem] text-center" data-aos="fade-left"
     data-aos-offset="500"
     data-aos-duration="1500">My Skills</h2>
        <div className="grid grid-cols-[0.5fr_1fr] grid-rows-[1fr_1fr] w-[50%] text-left mx-auto mt-[100px] mb-0 gap-y-[2rem]" >
        <Image src={Gif} alt="gif" className="overflow-clip  box-content" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"/>
        <div className="block" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">

        <h3 className="text-[#11999e] font-bold block my-4 mx-0 isolate">Design & Development</h3>
<p className="block my-4 mx-0 isolate">
I started learning to code when I was 19 years old because I wanted to make my own video games. Over time, I have gained a wealth of experience designing and developing mobile and web applications.</p>
        </div>
<Image src={Chilli} alt="chilli" className=" ml-[30px] pr-10" width={120} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" />
<div className="block" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300">

<h2 className=" text-[#66bfbf] text-[1.17rem] font-bold block my-4 mx-0 isolate">Hot Wings Challenge
</h2>
<p className="block my-4 mx-0 isolate">But my best skill is actually in eating hot wings. I am the undisputed queen of hot wing challenges. Ghost Peppers and Carolina Reapers are my favourite snacks.</p>
</div>
        </div>
        </div>
        <hr className="border-dotted border-[#eaf6f6] rounded-[50%] border-b-0 mx-auto my-[100px] w-[6%]"/>
        <div className=" text-center isolate block">
          <h2 className="text-[#66bfbf] font-bold text-[1.5rem] my-3 mx-0 " data-aos="fade-down"
     data-aos-anchor-placement="center-center" data-aos-duration="2000">Get In Touch</h2>
          <h3 className="text-[#11999e] font-bold text-[1.17rem] my-4 mx-0 isolate" data-aos="fade-left"
     data-aos-anchor-placement="center-center" data-aos-duration="2000">if you love hot wings as much as I do.</h3>
          <p className="my-4 w-[40%] mt-[40px] mb-[60px] mx-auto" data-aos="fade-right"
     data-aos-anchor-placement="center-center" data-aos-duration="2000">Love hot wings as much as I do? Let&apos;s talk about how awesome they are! We can code while we eat hot wings!</p>

          <Link 
  href="mailto:saiguna.vanam7@gmail.com"
  className="text-white rounded-[8px] text-[20px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] bg-gradient-to-b from-[#11cdd4] to-[#11999e] mx-[20px] my-[10px] hover:after:bg-green-400"
  data-aos="fade-zoom-out"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
>
    
    CONTACT ME

</Link>
        </div>
        <div className="bg-[#66bfbf] pt-12 px-4 pb-5 mt-20 w-full " data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-easing="ease-in-back"
     data-aos-delay="300">
    <div className="text-center">
      <Link href="" className="mx-5 my-2.5 hover:text-white block sm:inline">LinkedIn</Link>
      <Link href="" className="mx-5 my-2.5 hover:text-white block sm:inline">FaceBook</Link>
      <Link href="https://www.kloudcodes.com" target="_blank" className="mx-5 my-2.5 hover:text-white block sm:inline">Website</Link>
    </div>
    <p className="text-white text-center px-0 py-5 text-xs leading-relaxed my-4">© Sai guna @ The App strahatt.</p>
  </div>

      
</div>
    </>
    

  );
}
