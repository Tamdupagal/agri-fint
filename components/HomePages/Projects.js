import Image from "next/image";
import React from "react";
import { projectsData } from "../../public/homeData";

const Projects = () => {
  return (
    <div className=" bg-darkBg text-fontclr py-20  ">
      <div className="flex flex-col items-center ">
        <p className="text-xl font-semibold text-darkBg">Our Latest Projects</p>
        <h2 className="text-3xl lg:text-5xl my-3 uppercase">
          Associate Partners
        </h2>
        <Image
          src={"/assets/section-title-icon-1.png"}
          width={54}
          height={21}
          alt="title icon"
        />
      </div>

      {/*  <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10'>
                {
                    projectsData.map(singleProj => <ProjectCard key={singleProj.id} singleProj={singleProj} />)
                }
            </div>
 */}
      <div className="px-6 lg:px-36  text-fontclr py-3 flex flex-col lg:flex-row gap-5 items-center">
        <div className="w-full lg:w-2/5 ">
          <div className="relative flex justify-end">
            <div className="bg-primary h-[450px] w-96 rounded-md z-0 "></div>
            <Image
              src={"/assets/about-one-img-2.jpg"}
              alt="features"
              width={438}
              height={580}
              className="rounded-lg image absolute top-0 z-1 "
            />
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <div className="flex flex-col items-start gap-3">
            {/*  <p className="text-lg font-semibold text-primary">
                Get to Know Agrifint
              </p> */}
            <h2 className="text-3xl lg:text-5xl ">Zetta Farms</h2>
            {/* <Image
                src={"/assets/section-title-icon-1.png"}
                width={54}
                height={21}
                alt="title icon"
              /> */}
          </div>
          <div className="text-start">
            <p className="text-paraclr text-xl py-5">
              Zetta Farms, A technology-driven and process-oriented farm project
              for sustainable farming of fruits & vegetables and are managed by
              agriculture experts and skilled farmers resulting in high yield of
              better quality produce thus reviving the agriculture economy and
              bringing global food sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

const ProjectCard = ({ singleProj }) => {
  const { name, desc1, desc2, img } = singleProj;
  return (
    <div>
      <div className="relative overflow-hidden rounded-lg shadow-lg  h-[442px] project-card">
        <img className="object-cover w-full h-full " src={img} alt={name} />
        <div className="absolute bottom-0 left-0 px-6 py-7 text-fontclr project-card-bg">
          <div className="absolute bottom-10 left-10 ">
            <h4 className="mb-3 text-xl font-semibold tracking-tight ">
              {name}
            </h4>
            <p className="text-3xl ">{desc1}</p>
            <p className="text-3xl">{desc2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
