import React from 'react'

import '../css/Landing.css'

import ProjectCard from './ProjectCard'
import SkillCard from './SkillCard'
import TestimonialCard from './TestimonialCard'
import PricingCard from './PricingCard'

function Landing() {
  return (
    <div className='landing'>
      <header>
        <h1 className='landing__heading'> Modern Caliber Web Development</h1>
        <nav className='landing__nav'>
          <ul>
            <li className='landing__nav-options home'>Home</li>
            <li className='landing__nav-options'>My Work</li>
            <li className='landing__nav-options'>About Me </li>
            <li className='landing__nav-options'>Blog</li>
            <button className='landing__button'>Get a Free Quote</button>
          </ul>
        </nav>
      </header>

      <img
        src='/public/images/logo-vector.png'
        alt='Modern Caliber Logo Vector'
        className='landing__vector'
      />
      <div className='landing__welcome-container'>
        <span className='landing__welcome'>Hi! I am</span>
        <span className='landing__welcome orange'>Caleb Martin!</span>
      </div>
      <p className='landing__copy'>
        I am a Freelance Full Stack Javascript Developer. I create
        user-friendly, responsive websites that deliver, clear information with
        bold designs, which will engage your consumer and promote your services.
      </p>
      <button className='landing__button second'>Get a Free Quote</button>
      <h2 className='landing__section-heading projects-heading'>
        Featured Projects
      </h2>
      <span className='landing__subheading'>
        Clean and functional from design to development
      </span>
      <div className='landing__project-container'>
        <ProjectCard
          logo='/public/images/timescripture.png'
          heading='TimeScripture'
          text='TimeScripture is a web app that is able to instantly find any verse of the Bible if you give it a reference'
        />
        <ProjectCard
          logo='/public/images/redoak.png'
          heading='Red Oak Landscaping'
          text='Red Oak Landscaping is a landscaping business in Denver, PA. They specialize in hardscaping, landscaping, and seeding.'
        />
        <ProjectCard
          logo='/public/images/destefano.png'
          heading='Destefano Enterprises'
          text='TimeScripture is a web app that is able to instantly find any verse of the Bible if you give it a reference'
        />
      </div>
      <p className='projects__subhead'>Want to see more of my work?</p>
      <button className='projects__button'>
        Explore Full List of Projects
      </button>
      <h2 className='landing__section-heading'>Who am I?</h2>
      <span className='whoami__content'>
        I am a Full Stack Freelance Web Developer from Lancaster, PA. I
        specifically serve the Lancaster, Berks, and Lebanon areas, but I can do
        remote work for anyone anywhere in the world. I specialize in building
        websites with HTML, CSS, Javascript, ReactJS, and NodeJS. I am always
        looking for new amazing people to serve, so let’s work together to make
        your business a success!
      </span>
      <img
        src='/public/images/whoami-photo.png'
        alt='Who Am I Photo'
        className='whoami__photo'
      />
      <img
        src='/public/images/orange-vector.png'
        alt='Orange Vector'
        className='whoami__vector'
      />
      <button className='landing__button'>Get a Free Quote</button>
      <h2 className='landing__section-heading skills__heading'>
        Here's what I can do for your business
      </h2>
      <p className='skills__subhead'>
        It all starts with a cup of coffee or a video chat. As I have with other
        clients, I want to identify the core issue at hand and devise a plan to
        fix it. Whether it be a simple marketing site or a complex web
        application, I will come up with a strategy to implement it in the
        quickest and most efficient way possible.
      </p>
      <div className='landing__skill-container'>
        <SkillCard
          img='/public/images/design.png'
          heading='Website Design'
          text='Designing websites on Adobe XD using meticulous detail to create a gorgeous design that will attract your customers.'
        />
        <SkillCard
          img='/public/images/mobile.png'
          heading='Mobile/Responsive Design'
          text='Designing your websites so that all of your users, whether they be on desktop, tablet, or a mobile device will get a wonderful experience when they visit your site.'
        />
        <SkillCard
          img='/public/images/backend.png'
          heading='Back End Development'
          text='Building out APIs for your application using NodeJS and Express to create a seamless communication between your front end and your back end.'
        />
        <SkillCard
          img='/public/images/frontend.png'
          heading='Front End Development'
          text='Developing the front end of a website or application using HTML, CSS, and ReactJS to create a beautiful and responsive page that will pull in potential customers.'
        />
        <SkillCard
          img='/public/images/database.png'
          heading='Database Management'
          text='Building and maintaining a structured MongoDB database for storing and configuring information for a web application.'
        />
      </div>
      <h2 className='landing__section-heading'>Testimonials</h2>
      <span className='landing__subheading'>
        My clients’ satisfaction is at the core of everything I do. Here is what
        they have to say about my work!
      </span>
      <div className='landing__test-container'>
        <TestimonialCard
          author='Marc Hostetler'
          stars='5'
          text='Caleb has exceptional understanding of the Internet! Caleb is very patient and kind in interacting with us as customers!  The website that he made for us is incredible! He made it exactly the way we needed it, useful and attractive.The website is very easy to use and very professionally done. I use the website every day. Caleb’s work quality is exceptional, quick and accurate.'
        />
      </div>
      <h2 className='landing__section-heading'>Pricing</h2>
      <PricingCard
        heading='Website Redesign'
        price='$800'
        feature='- Basic Front End Restructuring in Javascript'
      />
      <PricingCard
        heading='Business Website'
        price='$1,000'
        feature='- Front End Development from scratch in Javascript'
        middle='true'
      />
      <PricingCard
        heading='Web Application'
        price='$2,000'
        feature='- Complex Front End & Back End Development in Javascript
        '
      />
    </div>
  )
}

export default Landing
