import React from "react";
import Navigation from "../components/Navigation";
import Main from "../components/maincomp/Main";
import Upcoming from "../components/maincomp/Upcoming";
import Marquee from "react-fast-marquee";
import Features from "../components/maincomp/Features";
import Team from "../components/maincomp/Team";
import Footer from "../components/maincomp/Footer";
import Faqs from "../components/maincomp/Faqs";

function Home() {
  return (
    <div>
      <Navigation />
      <Main />
      <div className="bg-blue-900 h-[60vh] pt-10">
      <div className="">
      <h2 class="mb-10 mt-0 text-4xl text-center tracking-tight font-extrabold text-white dark:text-white">
          Upcoming Events
        </h2>
        <div className="flex justify-center">
          <Marquee
            gradientColor={[255, 255, 255]} // Set gradient color
            speed={50} // Adjust speed as needed
            pauseOnHover={false} // Pause marquee on hover
            style={{
              marginLeft: '-10px', // Adjust left fade
              marginRight: '-10px' // Adjust right fade
            }}
          >
            <div className="flex ">
              <Upcoming name={"Justin"} />
              <Upcoming name={"Jimmy"} />
              <Upcoming name={"Khabib"} />
              <Upcoming name={"Akon"} />
              <Upcoming name={"Pewdiepie"} />
            </div>
          </Marquee>
        </div>
      </div>
      
    </div>
    <Features />
    <Team/>
    <Faqs/>
    <Footer/>
    
    </div>
  );
}

export default Home;
