import React from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useRef, useEffect } from "react";

const About = () => {

  const globeRef = useRef(null);

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    const rotate = () => {
      if (globe) {
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 1; // Adjust speed
      }
    };

    rotate();
  }, []);

  const [hasCopied, setHasCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("imrmnabil@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about"> 
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="Avatar"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Rahat Morshed Nabil</p>
              <p className="grid-subtext">
                With 2 years of experience in web development, I specialize in
                crafting visually stunning and user-friendly websites that
                deliver exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="Skills"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <p className="grid-headtext">Tech Stack</p>
            <p className="grid-subtext">
              I specialize in using a combination of HTML, CSS, JavaScript, and
              React to create dynamic and responsive web applications.
            </p>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="w-full rounded-3xl sm:h-[326px] h-fit flex justify-center items-center overflow-hidden">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl={
                  "https://unpkg.com/three-globe@2.41.10/example/img/earth-night.jpg"
                }
                bumpImageUrl={
                  "https://unpkg.com/three-globe@2.41.10/example/img/earth-topology.png"
                }
                labelsData={[
                  {
                    text: "I am Here",
                    lat: 23.8103,
                    lng: 90.4125,
                    size: 30,
                  },
                ]}
              />
            </div>
            <div className="">
              <p className="grid-headtext">I work around the world</p>
              <p className="grid-subtext">I am based in Bangladesh. Working remotly in most timezones.</p>
              <Button name="Hire me now" isBeam containerClass='w-full mt-10'/>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt=""  className="w-full sm:h-[266px] h-fit object-contain"/>
            <div className="">
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">I am passionate about coding and love to learn new things.</p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="/assets/grid4.png" alt=""  className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
            <div className="">
              <p className="grid-subtext text-center">Contact Me</p>
              <div onClick={handleCopy} className="copy-container">
                <img src={ `/assets/${hasCopied ? 'tick' : 'copy'}.svg`} alt="" className="w-6 h-6"/>
                <p className="lg:text-xl md:text-lg text-gray_gradient text-white">imrmnabil@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
