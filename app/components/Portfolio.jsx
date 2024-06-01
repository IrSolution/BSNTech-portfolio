"use client"
import React, { useState, useRef } from 'react';
import { PortfolioCard } from './PortfolioCard';
import PortfolioTag from './PortfolioTag';
import { motion, useInView } from 'framer-motion';

const portfolioData = [
  {
    id: 1,
    imgUri: "/images/portfolio/CE_Solinor.png",
    title: "CE Solinor",
    description: "Sistem Informasi",
    tag: ["All", "Web"],
    gitUri: "https://github.com",
    previewUri: "https://github.com",
  },
  {
    id: 2,
    imgUri: "/images/portfolio/SLIK.png",
    title: "SLIK",
    description: "Sistem Informasi",
    tag: ["All", "Web"],
    gitUri: "https://github.com",
    previewUri: "https://github.com",
  }
];


const Portfolio = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (tag) => {
    setTag(tag);
  };

  const filterPortfolio = portfolioData.filter((portfolio) =>
    portfolio.tag.includes(tag)
  );

  const cardTypes = { 
      initial: {y: 50, opacity: 0},
      animate: {y: 0, opacity: 1},  
  };

  return (
    <section id='portfolio'>
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-3'>Portfolio</h2>
    <div className='text-white flex flex-row justify-center items-center
    gap-2 py-6'>
      <PortfolioTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
      <PortfolioTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
      <PortfolioTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
    </div>
    <ul ref={ref}
    className='grid md:grid-cols-3 gap-8 md:gap-12'>
      {
      filterPortfolio.map((item, index) =>
        <motion.li
          key={index}
          variants={cardTypes}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
        >

        <PortfolioCard 
        key={item.id} 
        title={item.title} 
        imgUri={item.imgUri} 
        description={item.description} 
        gitUri={item.gitUri} 
        previewUri={item.previewUri} />
        </motion.li>
      )}
    </ul>
    </section>
  )
}

export default Portfolio