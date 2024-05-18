"use client";
import React, { useState} from 'react';
import GithubIcon from '../../public/github-icon.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const Contact = () => {
  const [emailSubmited, setEmailSubmited] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email : e.target.email.value,
      subject : e.target.subject.value,
      message : e.target.message.value,
    };
    const JSONData = JSON.stringify(data);
    const endpoint = "/api/send";
    
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONData,
    };
    
    const response = await fetch(endpoint, options);
    const result = await response.json();
    
    if(result.error === null) {
      console.log("Message sent.")
      setEmailSubmited(true);
    }
  };

  return (
    <section
      id='contact'
      className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'
    >
      <div
      className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
      from-lime-600 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4
      -left-4 transform -translate-x-1/2 -translate-1/2'
      ></div>
      <div className='z-1'>
        <h5 className='text-xl font-bold text-white my-2'>
          Let&apos;s Connect!
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href='gihub.com/irpanrain'>
            <Image
              src={GithubIcon}
              alt='Github Icon'
            />
          </Link>
          <Link href='linkedin.com/in/irpanabdulrahman'>
              <Image  
                src={LinkedinIcon}
              alt='Linkedin Icon'>
              </Image>
          </Link>
        </div>
      </div>
      <div>
        {
          emailSubmited ? (
            <p className='text-green-500 text-sm mt-2'>
              Message sent successfully.
            </p>
          ) : (
            <form className='flex flex-col' onSubmit={handleSubmit}>
              <div className='mb-6'>
                <lable 
                  htmlFor='email'
                  className='text-white block mb-2 text-sm font-medium'
                >
                  Your Email
                </lable>
                <input
                  name='email'
                  type='email'
                  id='email'
                  required
                  className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                  placeholder='exmple@mail.com'
                />
              </div>
              <div className='mb-6'>
                <lable 
                  htmlFor='subject'
                  className='text-white block mb-2 text-sm font-medium'
                >
                  Subject
                </lable>
                <input
                  name='subject'
                  type='text'
                  id='subject'
                  required
                  className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                  placeholder='Just wanted to say hi...'
                />
              </div>
              <div className='mb-6'>
                <lable 
                  htmlFor='message'
                  className='text-white block mb-2 text-sm font-medium'
                >
                  Message
                </lable>
                <textarea
                  name='message'
                  id='message'
                  className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                  placeholder='Let me know how I can help you'
                />
              </div>
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
              Send Message
            </button>
              
            </form>
          )
        }
      </div>
    </section>
  )
}

export default Contact