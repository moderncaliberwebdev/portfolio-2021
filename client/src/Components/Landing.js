import React, { useRef, useEffect } from 'react'

import axios from 'axios'

import '../css/Landing.css'

import ProjectCard from './ProjectCard'
import SkillCard from './SkillCard'
import TestimonialCard from './TestimonialCard'
import PricingCard from './PricingCard'

import Rellax from 'rellax'
import Navigation from './Navigation'

function Landing() {
  const rellaxRef = useRef()

  useEffect(() => {
    if (window.matchMedia('(max-width: 600px)').matches) {
      new Rellax('.animate', {
        // <---- Via class name
        speed: 3,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false,
      })

      new Rellax(rellaxRef.current, {
        // <---- Via useRef element
        speed: 3,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false,
      })
    }
  }, [])

  const scrollToQuote = () => {
    document.getElementById('quote').scrollIntoView()
  }

  const formSubmit = (e) => {
    e.preventDefault()

    const projecttype = document.getElementById('project-type')
    const price = document.getElementById('price')
    const time = document.getElementById('time')
    const prompted = document.getElementById('prompted')
    const goals = document.getElementById('goals')
    const ideas = document.getElementById('ideas')
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const themessage = document.getElementById('themessage')
    const formResponse = document.getElementById('landing__form-res')
    const inputs = [
      projecttype,
      price,
      time,
      prompted,
      goals,
      ideas,
      name,
      email,
    ]

    if (themessage.value == '') {
      formResponse.textContent = 'Sending...'
      axios
        .get(
          //use /api for dev and take it away for prod
          `/api/email?projecttype=${projecttype.value}&price=${price.value}&time=${time.value}&prompted=${prompted.value}&goals=${goals.value}&ideas=${ideas.value}&name=${name.value}&email=${email.value}`
        )
        .then((res) => {
          const data = res.data
          if (data.formResponse) {
            formResponse.textContent = data.formResponse
          } else {
            formResponse.textContent = 'Message Sent'
            inputs.forEach((input) => {
              input.value = ''
            })
          }
        })
    }
  }

  return (
    <div className='landing'>
      <header>
        <img
          src='/public/images/coralLogo.png'
          alt='Modern Caliber Logo'
          className='landing__logo'
        />
        <h1 className='landing__heading'> Modern Caliber Web Development</h1>
        <Navigation />
        <nav className='landing__nav'>
          <ul>
            <li className='landing__nav-options home'>Home</li>
            <li className='landing__nav-options'>My Work</li>
            <li className='landing__nav-options'>About Me </li>
            {/* <li className='landing__nav-options'>Blog</li> */}
            <button className='landing__button' onClick={scrollToQuote}>
              Get a Free Quote
            </button>
          </ul>
        </nav>
      </header>
      <div className='landing__welcome-container'>
        <span className='landing__welcome'>Hi! I am</span>
        <span className='landing__welcome orange'>Caleb Martin!</span>
      </div>
      <p className='landing__copy'>
        I am a Freelance Full Stack Javascript Developer. I create
        user-friendly, responsive websites that deliver, clear information with
        bold designs, which will engage your consumer and promote your services.
      </p>
      <button className='landing__button second' onClick={scrollToQuote}>
        Get a Free Quote
      </button>
      <picture>
        <source
          media='(max-width:600px)'
          srcSet='/public/images/logo-vector-small.png'
        />
        <img
          src='/public/images/logo-vector.png'
          alt='Modern Caliber Logo Vector'
          className='landing__vector'
          ref={rellaxRef}
        />
      </picture>
      <h2 className='landing__section-heading projects-heading' id='projects'>
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
          url='https://timescripture.com'
        />
        <ProjectCard
          logo='/public/images/redoak.png'
          heading='Red Oak Landscaping'
          text='Red Oak Landscaping is a landscaping business in Denver, PA. They specialize in hardscaping, landscaping, and seeding.'
          url='https://redoakinc.org'
        />
        {/* <ProjectCard
          logo='/public/images/destefano.png'
          heading='Destefano Enterprises'
          text='TimeScripture is a web app that is able to instantly find any verse of the Bible if you give it a reference'
        /> */}
      </div>
      {/* <p className='projects__subhead'>Want to see more of my work?</p>
      <button className='landing__button center'>
        Explore Full List of Projects
      </button> */}
      <h2 className='landing__section-heading' id='about'>
        Who am I?
      </h2>
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
      <button
        className='landing__button whoami__button'
        onClick={scrollToQuote}
      >
        Get a Free Quote
      </button>
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
      <div className='pricingcard-container'>
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
      <h2 className='landing__section-heading quote__heading' id='quote'>
        Get your free quote!
      </h2>
      <span className='landing__subheading quote__heading'>
        I’d love to work with you, so tell me a little about your project so we
        can get started right away!
      </span>
      <p className='quote__question'>
        What type of project do you need completed?
      </p>
      <div className='quote__select-container'>
        <select
          name='project-type'
          className='quote__dropdown'
          id='project-type'
        >
          <option value='Website Redesign'>Website Redesign</option>
          <option value='Business Website'>Business Website</option>
          <option value='Web Application'>Web Application</option>
        </select>
      </div>
      <p className='quote__question'>
        What are your budget expectations for this project?
      </p>
      <div className='quote__select-container'>
        <select name='project-type' className='quote__dropdown' id='price'>
          <option value='$500 - $1,000'>$500 - $1,000</option>
          <option value='$1,000 - $3,000'>$1,000 - $3,000</option>
          <option value='$3,000 - $5,000'>$3,000 - $5,000</option>
          <option value='$5,000+'>$5,000+</option>
        </select>
      </div>
      <p className='quote__question'>
        When do you want this project completed?
      </p>
      <div className='quote__select-container'>
        <select name='project-type' className='quote__dropdown' id='time'>
          <option value='Within a month'>Within a month</option>
          <option value='1 - 3 months'>1 - 3 months</option>
          <option value='3+ months'>3+ months</option>
        </select>
      </div>
      <input type='text' id='themessage' />
      <p className='quote__question'>
        What prompted you to start this project?
      </p>
      <textarea className='quote__open-answer' id='prompted'></textarea>
      <p className='quote__question'>
        What business goals are you trying to achieve?
      </p>
      <textarea className='quote__open-answer' id='goals'></textarea>
      <p className='quote__question'>
        Tell me a little bit about what you want me to do for you.
      </p>
      <textarea className='quote__open-answer' id='ideas'></textarea>
      <p className='quote__question'>Full Name</p>
      <textarea
        className='quote__open-answer details'
        placeholder='John Doe'
        id='name'
      ></textarea>
      <p className='quote__question'>Email</p>
      <textarea
        className='quote__open-answer details'
        placeholder='name@example.com'
        id='email'
      ></textarea>
      <button className='landing__button center' onClick={formSubmit}>
        Submit Project Details
      </button>
      <p id='landing__form-res'></p>
      <footer className='landing__footer'>
        <img
          src='/public/images/footer-bg.png'
          alt='Footer Vector'
          className='footer__vector'
        />
        <img
          src='/public/images/logo.png'
          alt='Modern Caliber Logo'
          className='footer__logo'
        />
        <span className='footer__text'>Modern Caliber Web Development</span>
        <div className='footer__link-container'>
          <a href='https://dribbble.com/calebdidthis'>
            <img
              src='/public/images/dribbble.png'
              alt='My Dribbble'
              className='footer__links'
            />
          </a>
          <a href='https://github.com/moderncaliberwebdev'>
            <img
              src='/public/images/github.png'
              alt='My Github'
              className='footer__links'
            />
          </a>
          <a href='https://www.instagram.com/moderncaliberwebdev/'>
            <img
              src='/public/images/insta.png'
              alt='My Instagram'
              className='footer__links'
            />
          </a>
          <a href='https://www.linkedin.com/in/calebmartinwebdev/'>
            <img
              src='/public/images/linkedin.png'
              alt='My LinkedIn'
              className='footer__links'
            />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Landing
