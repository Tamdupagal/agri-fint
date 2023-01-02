import Image from 'next/image';
import React from 'react';
import { projectsData } from '../../public/homeData';

const Projects = () => {
    return (
        <div className='px-6 lg:px-20 bg-primary text-fontclr  py-20'>
            <div className='flex flex-col items-center '>
                <p className='text-xl font-semibold text-paraclr'>Our Latest Projects</p>
                <h2 className='text-6xl my-3'>Associate partners</h2>
                <Image src={"/assets/section-title-icon-1.png"} width={54} height={21} alt="title icon" />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10'>
                {
                    projectsData.map(singleProj => <ProjectCard key={singleProj.id} singleProj={singleProj} />)
                }
            </div>


        </div>
    );
};

export default Projects;


const ProjectCard = ({ singleProj }) => {
    const { name, desc1, desc2, img } = singleProj;
    return (
        <div >
            <div class="relative overflow-hidden rounded-lg shadow-lg  h-[442px]">
                <img class="object-cover w-full h-full " src={img} alt={name} />


                <div class="absolute bottom-0 left-0 px-6 py-7 text-fontclr project-card-bg">
                    <div className='absolute bottom-10 left-10 '>
                        <h4 class="mb-3 text-xl font-semibold tracking-tight ">{name}</h4>
                        <p class="text-3xl ">{desc1}</p>
                        <p class="text-3xl">{desc2}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}