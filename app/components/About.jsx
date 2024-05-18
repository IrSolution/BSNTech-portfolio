"use client"
import React, { useState, useRef, useTransition } from 'react';
import Image from 'next/image';
import TabOption from './TabOption';

const SOURCE_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Php</li>
        <li>JavaScript</li>
        <li>Spring Boot</li>
        <li>Laravel</li>
        <li>ReactJs</li>
        <li>NextJs</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bootcamp Programming Training PUB (Pemberdayaan Umat Bekelanjutan)</li>
        <li>Universitas Nasional Pasim, Bandung</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>PT Generali Indonesia (2022-current)</li>
        <li>PT Imani Prima (2021-2022)</li>
        <li>PT Air Mas Perkasa (2020-2021)</li>
        <li>PT Intek Sarana Sejahtera (2019-2020)</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src='/images/iar.png' alt='about image' width={500} height={500} className='rounded-lg' />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-center text-4xl font-bold text-white mt-4 mb-3'>About</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabOption
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabOption>

            <TabOption
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabOption>

            <TabOption
              selectTab={() => handleTabChange('experiences')}
              active={tab === 'experiences'}
            >
              {' '}
              Experiences{' '}
            </TabOption>
          </div>
          <div className="mt-8">
            {SOURCE_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;