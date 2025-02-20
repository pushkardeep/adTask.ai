import React from "react";
import NorButton from "./components/common/NorButton";
import SliderElem from "./components/common/SliderElem";
import WorkedWithElem from "./components/common/WorkedWithElem";
import SmButton from "./components/common/SmButton";

function App() {
  return (
    <div className="main w-full h-fit bg-[#050506] overflow-hidden">
      {/* page 1  */}
      <div className="w-full min-h-screen max-w-[1320px] mx-auto py-5 px-4">
        {/* nav  */}
        <nav className="relative w-[70%] mx-auto flex justify-between items-center bg-[#5C60691A] border border-[#FFFFFF1A] rounded-[16px] py-2 px-5 backdrop-blur-md z-20">
          <img className="w-[70px]" src="/images/adTask.png" alt="logo" />

          <div className="w-fit ml-24">
            {["Products", "Tools", "Contact us"].map((e, i) => (
              <span
                key={i}
                className="text-white ml-8 font-[pop_reg] text-[12px]"
              >
                {e}
              </span>
            ))}
          </div>

          <div className="w-fit flex justify-center items-center gap-3">
            <NorButton title={"Log in"} />
            <NorButton title={"Schedule a Call"} styles={"bg-[#7687B54A]"} />
          </div>
        </nav>

        {/* triangle  */}
        <div class="absolute top-20 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[350px] border-l-transparent border-r-[350px] border-r-transparent border-b-[450px] border-b-[#263048] opacity-40 blur-3xl z-0"></div>
        <div class="absolute top-20 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[250px] border-l-transparent border-r-[250px] border-r-transparent border-b-[400px] border-b-[#263048] blur-xl z-10"></div>

        {/* masked grid  */}
        <img
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[550px] aspect-square object-cover opacity-5 z-0"
          src="/images/hero_mask_group.png"
          alt="masked group"
        />

        {/* badge  */}
        <div className="relative heroBadge w-fit h-fit flex justify-center items-center gap-2 mx-auto px-3.5 py-2.5 rounded-[16px] border border-[#FFFFFF0D] text-white text-[12.5px] font-[pop_reg] mt-14 z-20">
          <img
            className="w-6 aspect-square object-center"
            src="/images/star.png"
            alt="star"
          />
          <span>Transform Your Digital Presence with AI Agents</span>
        </div>

        {/* center text  */}
        <div className="relative w-fit h-fit mx-auto flex items-center justify-center mt-8 z-20">
          <h1 className="heroText text-8xl font-[pop_reg]">ad</h1>
          <h1 className="heroText text-8xl font-[pop_sem]">Task.ai</h1>
        </div>

        {/* hero passage  */}
        <p className="relative w-full mx-auto max-w-[600px] text-center text-white text-[12.5px] font-[pop_reg] mt-8 z-20">
          Stop struggling with marketing decisions. Our AI assistant analyzes
          your business, creates personalized strategies, and helps you execute
          them - all in real-time.
        </p>

        {/* free trial button  */}
        <button className="relative cursor-pointer px-6 py-2.5 block mx-auto text-white text-[12.5px] font-[pop_reg] bg-[#7687B54A] border border-b-[#7687B5] border-r-[#7687B5]  border-l-[#333B4F] border-t-[#333B4F] rounded-full mt-8 z-20 overflow-hidden">
          Start Free Trial
          <span className="w-[50%] aspect-video absolute bg-[#E6EDFF] top-10 left-1/2 -translate-x-1/2 rounded-full blur-md"></span>
        </button>

        {/* trial text  */}
        <h6 className="relative w-fit block mx-auto text-[#C5CDE3] text-[8.5px] font-[pop_reg] mt-3 z-20">
          Try AdTask AI free for 30 days
        </h6>

        {/* video  */}
        <div className="video relative w-full mx-auto max-w-[750px] aspect-video rounded-3xl bg-black border border-[#566999] flex justify-center items-center mt-4.5 z-20">
          <div className="relative w-fit h-fit flex items-center justify-center opacity-50">
            <h1 className="heroText text-6xl font-[pop_reg]">Ad</h1>
            <h1 className="heroText text-6xl font-[pop_sem]">Task.ai</h1>
          </div>
          <img
            className="w-[60px] object-cover absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            src="/images/yt.png"
            alt="youtube"
          />
        </div>
      </div>

      {/* page 2  */}
      <div className="relative w-full min-h-screen max-w-[1320px] mx-auto py-5 px-4">
        {/* slider  */}
        <div className="w-full flex gap-10 overflow-hidden mt-16">
          <SliderElem src={"/images/companies/Amazon.png"} alt={"amazon"} />
          <SliderElem src={"/images/companies/Cocacola.png"} alt={"Cocacola"} />
          <SliderElem src={"/images/companies/Google.png"} alt={"Google"} />
          <SliderElem src={"/images/companies/intel.png"} alt={"intel"} />
          <SliderElem
            src={"/images/companies/Salesforce.png"}
            alt={"Salesforce"}
          />
          <SliderElem src={"/images/companies/Sony.png"} alt={"Sony"} />
          <SliderElem src={"/images/companies/Workday.png"} alt={"Workday"} />
          <SliderElem src={"/images/companies/Amazon.png"} alt={"amazon"} />
          <SliderElem src={"/images/companies/Cocacola.png"} alt={"Cocacola"} />
          <SliderElem src={"/images/companies/Google.png"} alt={"Google"} />
          <SliderElem src={"/images/companies/intel.png"} alt={"intel"} />
          <SliderElem
            src={"/images/companies/Salesforce.png"}
            alt={"Salesforce"}
          />
          <SliderElem src={"/images/companies/Sony.png"} alt={"Sony"} />
        </div>

        {/* masked grid  */}
        <img
          className="absolute top-35 left-1/2 -translate-x-1/2 w-[550px] aspect-square object-cover opacity-5 z-0 "
          src="/images/hero_mask_group.png"
          alt="masked group"
        />

        {/* trial text  */}
        <h6 className="relative w-fit block mx-auto text-[#E2E8F8] text-[8.5px] font-[pop_reg] mt-48 z-20">
          Adtask AI works with :
        </h6>

        {/* worked with  */}
        <div className="relative w-fit h-fit mx-auto flex justify-center items-center gap-8 mt-6 z-20">
          <WorkedWithElem
            src={"/images/workedWith/acenture.png"}
            alt={"acenture"}
          />
          <WorkedWithElem src={"/images/workedWith/meta.png"} alt={"meta"} />
          <WorkedWithElem
            src={"/images/workedWith/linkedin.png"}
            alt={"linkedin"}
          />
          <WorkedWithElem
            src={"/images/workedWith/tictok.png"}
            alt={"tictok"}
          />
          <WorkedWithElem
            src={"/images/workedWith/twitter.png"}
            alt={"twitter"}
          />
          <WorkedWithElem
            src={"/images/workedWith/amazon.png"}
            alt={"amazon"}
          />
        </div>
      </div>

      {/* page 3  */}
      <div className="relative w-full min-h-screen max-w-[1320px] mx-auto py-5 px-4">
        {/* smButton  */}
        <SmButton title={"Features"} styles={"mb-5"} />

        {/* headings  */}
        <div className="relative w-full flex justify-between items-center gap-5 z-20">
          <hr className="sideLineRight w-full rounded-full" />
          <div className="min-w-fit">
            <h1 className="min-w-fit text-center text-white text-2xl font-[pop_reg]">
              Feature packed to make
            </h1>
            <h1 className="min-w-fit catText text-center text-2xl font-[pop_reg]">
              Digital marketing easier and affordable.
            </h1>
          </div>
          <hr className="sideLineLeft w-full rounded-full" />
        </div>

        {/* smHeading */}
        <h6 className="relative w-fit block mx-auto text-[#E2E8F8] text-[10px] font-[pop_reg] mt-6 z-20">
          Experience Intelligent Features to optimize your marketing efforts.
        </h6>

        {/* blur light  */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[350px] aspect-video bg-[#263048] rounded-full blur-2xl z-0"></div>

        {/* features card  1*/}
        <div className="bg-gradient-to-l from-[#7687b5] to-[#333b4f] w-[260px] p-[0.8px] rounded-xl relative overflow-hidden">
          <div className="bg-gradient-to-b from-[#0b0b0b] to-[#1d2333] w-full h-full pb-4 pt-10 rounded-xl relative">
            {/* triangle  */}
            <div class="absolute top-0 left-1/2 -translate-x-1/2  w-0 h-0 border-l-[110px] border-l-transparent border-r-[110px] border-r-transparent border-b-[270px] border-b-[#263048] blur-xl z-0"></div>
            <div class="absolute top-[-20%] left-[-25%] -rotate-[20deg] w-0 h-0 border-l-[110px] border-l-transparent border-r-[110px] border-r-transparent border-b-[320px] border-b-[#263048] blur-xl opacity-50 z-0"></div>

            {/* circle  */}
            <div className="w-full border border-[#263048]/30 border-t-[#5C73AE]/30 aspect-square rounded-full relative flex justify-center items-center z-10">
              <div className="w-2 aspect-square relative">
                <div className="w-full h-full bg-white rounded-full relative z-0"></div>
                <img
                  className="min-w-[100px] aspect-square absolute left-[-73px] top-[2px] z-20"
                  src="/images/radar_circle.png"
                  alt=""
                />
              </div>
            </div>

            {/* text  */}
            <div className="w-full px-5 relative mt-10 z-10">
              <h4 className="text-white font-[pop_reg] text-[10px]">
                Reach Target Audience
              </h4>
              <p className="text-white/70 font-[pop_reg] text-[8.5px] mt-1 leading-3">
                Pinpoint the perfect audience with precision. Our AI-driven
                targeting ensures every message resonates where it matters most.
              </p>
            </div>
          </div>
        </div>

        {/* features card  2*/}
        <div className="bg-gradient-to-l from-[#7687b5] to-[#333b4f] w-[260px] p-[0.8px] rounded-xl relative overflow-hidden">
          <div className="bg-gradient-to-b from-[#0b0b0b] to-[#1d2333] w-full h-full pb-4 pt-10 rounded-xl relative">
            {/* triangle  */}
            <div class="absolute top-0 left-1/2 -translate-x-1/2  w-0 h-0 border-l-[110px] border-l-transparent border-r-[110px] border-r-transparent border-b-[270px] border-b-[#263048] blur-xl z-0"></div>
            <div class="absolute top-[-20%] left-[-25%] -rotate-[20deg] w-0 h-0 border-l-[110px] border-l-transparent border-r-[110px] border-r-transparent border-b-[320px] border-b-[#263048] blur-xl opacity-50 z-0"></div>

            {/* circle  */}
            <div className="w-full border border-[#263048]/30 border-t-[#5C73AE]/30 aspect-square rounded-full relative flex justify-center items-center z-10">
              <div className="w-[70%] border border-[#263048]/30 border-t-[#5C73AE]/30 aspect-square rounded-full relative flex justify-center items-center z-10">
                <img
                  className="h-[85%]"
                  src="/images/electric.png"
                  alt="electric"
                />
              </div>
            </div>

            {/* text  */}
            <div className="w-full px-5 relative mt-10 z-10">
              <h4 className="text-white font-[pop_reg] text-[10px]">
                Intelligent Agents to Optimize your Reach
              </h4>
              <p className="text-white/70 font-[pop_reg] text-[8.5px] mt-1 leading-3">
                Scale and refine your marketing with AI-powered agents. They
                track performance in real-time to help you reach more customers
                efficiently.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-l from-[#7687b5] to-[#333b4f] w-[260px] p-[0.8px] rounded-xl relative overflow-hidden">
          <div className="bg-gradient-to-b from-[#0b0b0b] to-[#1d2333] w-full h-full pb-4 pt-10 rounded-xl relative">
            {/* triangle  */}
            <div class="absolute top-0 left-1/2 -translate-x-1/2  w-0 h-0 border-l-[110px] border-l-transparent border-r-[110px] border-r-transparent border-b-[270px] border-b-[#263048] blur-xl z-0"></div>


            {/* text  */}
            <div className="w-full px-5 relative mt-10 z-10">
              <h4 className="text-white font-[pop_reg] text-[10px]">
                Intelligent Agents to Optimize your Reach
              </h4>
              <p className="text-white/70 font-[pop_reg] text-[8.5px] mt-1 leading-3">
                Scale and refine your marketing with AI-powered agents. They
                track performance in real-time to help you reach more customers
                efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
