import React, { useEffect, useState, useRef } from "react";
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaPhp, FaGitAlt, FaDatabase, FaFacebookF, FaYoutube, FaWhatsapp, FaLinkedinIn, FaBirthdayCake } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiFirebase, SiPostman, SiIntellijidea, SiApachenetbeanside, SiAndroidstudio, SiApachejmeter } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import Header from "./Header";
import "./App.css";


function App() {

  const fullText1 = `This is a full-featured online auction platform built primarily with Java,
   using Hibernate for ORM, RESTful APIs for backend communication, 
   and a web-based frontend with CSS and JavaScript.The Online Auction System allows users to register, 
   list items for auction, place bids in real time, and manage their auction history. 
   Administrators can manage users and auctions.`;

  const fullText2 = `Movie Booking App is an Android-based application that allows users 
   to book movie tickets seamlessly. Built with Java, MySQL, and Hibernate, 
   it features user authentication, seat selection, and secure payments. 
   The backend is powered by GlassFish and OkHttp.`;

  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  const toggleDescription1 = () => {
    setExpanded1(!expanded1);
  };
  const toggleDescription2 = () => {
    setExpanded2(!expanded2);
  }

  const softSkills = [
    { name: "Problem Solving", percent: 90 },
    { name: "Teamwork", percent: 95 },
    { name: "Time Management", percent: 88 },
    { name: "Adaptability", percent: 84 },
    { name: "Critical Thinking", percent: 80 },
    { name: "Communication", percent: 80 },
    { name: "Clean Code Practices", percent: 87 },
    { name: "Debugging", percent: 81 },
  ];

  const AnimatedSkill = ({ name, percent }) => {
    const [displayedPercent, setDisplayedPercent] = useState(0);
    const circleRef = useRef(null);

    useEffect(() => {
      let current = 0;
      const duration = 1000;
      const increment = percent / (duration / 20);

      const interval = setInterval(() => {
        current += increment;
        if (current >= percent) {
          current = percent;
          clearInterval(interval);
        }
        setDisplayedPercent(Math.round(current));
      }, 20);

      if (circleRef.current) {
        circleRef.current.style.strokeDasharray = `0, 100`;
        setTimeout(() => {
          circleRef.current.style.transition = 'stroke-dasharray 1s ease-out';
          circleRef.current.style.strokeDasharray = `${percent}, 100`;
        }, 50);
      }

      return () => clearInterval(interval);
    }, [percent]);

    return (
      <div className="circle-skill-item">
        <div className="circle-progress">
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path
              className="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              ref={circleRef}
              className="circle"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="18" className="percentage">{displayedPercent}%</text>
          </svg>
        </div>
        <p className="skill-name">{name}</p>
      </div>
    );
  };


  return (
    <div className="App">
      <Header className="header-possion" />

      <section id="home" className="home">
        <div className="home-conteiner">
          <div className="left-side">
            <h1 className="name">Hi ! <br /> I'm Shashika Nishani .</h1>
            <p className="short-discription">Undergraduate Software Enginner|Full-stack Web Developer| Mobile App Developer | Desk-Top Application Developer  </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/shashika.nishani.904?mibextid=ZbWKwL" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://youtube.com/@shashikanishani7434?si=zDmtuoCQ2bXAPKpj" target="_blank" rel="noreferrer"><FaYoutube /></a>
              <a href="https://wa.me/94706354670?text=Hello%20I%20visited%20your%20portfolio!" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
              <a href="https://www.linkedin.com/in/shashika-nishani-a55273278/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="right-side">
            <img src={`${process.env.PUBLIC_URL}/img.jpg`} alt="profile" className="profile-img" />
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2 className="heading"> About Me</h2>
        <div className="about-container">

          <div>
            <img src={`${process.env.PUBLIC_URL}/img.jpg`} alt="profile" className="about-profile-img" />
          </div>
          <div className="about-text">
            <p>
              Hello! I'm <strong>Shashika Nishani</strong>, a passionate <strong>Software Engineering undergraduate</strong> from <strong>Birmingham City University Campus</strong>.
              I love solving real-world problems with code, and I'm always eager to learn new things. My goal is to become a skilled <strong>Full-Stack Developer</strong>
              and create user-friendly software that makes people's lives easier.
            </p>
            <div className="about-details">
              <p><FaBirthdayCake />  Birthday : November 2002</p>
              <p><FaPhoneFlip /> Phone : +94 70 635 4670</p>
              <p><FaLocationDot /> Address : Galle , Sri Lanka</p>
              <p><MdEmail /> Email : contact123shash@gmail.com</p>
              <p><RiAccountCircleFill /> Nationality : Sri Lankan</p>
            </div>

            <div className="project-links">
              <a
                href={`${process.env.PUBLIC_URL}/softwareengineeringintern.pdf`}
                target="_blank"
                rel="noreferrer"
                className="modern-project-link"
              >
                <span>Download Resume</span>
                <svg
                  className="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2 className="heading">My Skills</h2>
        <div className="skill-container">

          <div className="technical-skills">
            <h3 className="category-name">Technical Skills</h3>

            <div className="skill-category">
              <h5> Programming Languages</h5>
              <div className="icon-container">

                <div className="skill-item">
                  <span className="skill-name"><FaJava className="icon" />Java</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "95%" }}>
                      <span className="tooltip">95%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name"><FaJs className="icon" />JavaScript</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "80%" }}>
                      <span className="tooltip">80%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name"><FaDatabase className="icon" />SQL</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "87%" }}>
                      <span className="tooltip">87%</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="skill-category">
              <h5>Frontend</h5>
              <div className="icon-container">

                <div className="skill-item">
                  <span className="skill-name"><FaHtml5 className="icon" />HTML</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "98%" }}>
                      <span className="tooltip">98%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name"><FaCss3Alt className="icon" />CSS</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "90%" }}>
                      <span className="tooltip">90%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name"><FaReact className="icon" />React.js</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "79%" }}>
                      <span className="tooltip">79%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name"><FaBootstrap className="icon" />Boostrap</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "96%" }}>
                      <span className="tooltip">96%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h5>Backend</h5>
              <div className="icon-container">

                <div className="skill-item">
                  <span className="skill-name"><SiSpringboot className="icon" />Spring Boot</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "50%" }}>
                      <span className="tooltip">56%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name"><FaNodeJs className="icon" />Node.js</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "64%" }}>
                      <span className="tooltip">64%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name"><FaPhp className="icon" />PHP</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "78%" }}>
                      <span className="tooltip">78%</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="skill-category">
              <h5>Database</h5>

              <div className="icon-container">

                <div className="skill-item">
                  <span className="skill-name"><SiMysql className="icon" />MySQL</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "99%" }}>
                      <span className="tooltip">99%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name"><SiFirebase className="icon" />Firebase</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "80%" }}>
                      <span className="tooltip">80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h5>Tools</h5>

              <div className="icon-container">

                <div className="skill-item">
                  <span className="skill-name"><SiPostman className="icon" />Postman</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "70%" }}>
                      <span className="tooltip">70%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name"><VscVscode className="icon" />VS Code</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "90%" }}>
                      <span className="tooltip">90%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name"><SiApachenetbeanside className="icon" />NetBeans</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "90%" }}>
                      <span className="tooltip">90%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name"><SiIntellijidea className="icon" />Intellij IDEA</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "90%" }}>
                      <span className="tooltip">90%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name"><SiAndroidstudio className="icon" />Android Studio</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "80%" }}>
                      <span className="tooltip">80%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name"><SiApachejmeter className="icon" />JMeter</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ "--bar-width": "75%" }}>
                      <span className="tooltip">75%</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className="personal-skills">
            <h3 className="category-name">Personal Skills</h3>
            <div className="personal-skill-item">
              {softSkills.map((skill, index) => (
                <AnimatedSkill key={index} name={skill.name} percent={skill.percent} />
              ))}
            </div>
          </div>

        </div>
      </section>

      <section id="projects" className="projects">
        <h2 className="heading">My Projects</h2>
        <div className="project-container">

          <div className="project-item">
            <video
              className="project-video"
              src={`${process.env.PUBLIC_URL}/videos/Online Auction System - Copy.mp4`}
              controls
              loop
              muted
              playsInline
              style={{ width: "100%", borderBottom: "3px solid #09dbf2", borderRadius: "12px 12px 0 0" }}
            />
            <h3 className="project-title">Online Auction System</h3>
            <p className="project-description">
              {expanded1 ? fullText1 : fullText1.substring(0, 155) + '...'}
              <span
                onClick={toggleDescription1}
                style={{
                  color: '#09dbf2',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginLeft: '5px'
                }}
              >
                {expanded1 ? 'See Less' : 'See More'}
              </span>
            </p>
            <div className="project-links">
              <a
                href="https://github.com/Sha1120/online-Auction-System.git"
                target="_blank"
                rel="noreferrer"
                className="modern-project-link"
              >
                <span>View Code</span>
                <svg
                  className="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="project-item">
            <video
              className="project-video"
              src={`${process.env.PUBLIC_URL}/videos/Mobile Application Complete Video.mp4`}
              controls
              loop
              muted
              playsInline
              style={{ width: "100%", borderBottom: "3px solid #09dbf2", borderRadius: "12px 12px 0 0" }}
            />
            <h3 className="project-title">Movie Ticket Booking System</h3>
            <p className="project-description">
              {expanded2 ? fullText2 : fullText2.substring(0, 100) + '...'}
              <span
                onClick={toggleDescription2}
                style={{
                  color: '#09dbf2',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginLeft: '5px'
                }}
              >
                {expanded2 ? 'See Less' : 'See More'}
              </span>
            </p>
            <div className="project-links">
              <a
                href="https://github.com/Sha1120/Mobile-Application.git"
                target="_blank"
                rel="noreferrer"
                className="modern-project-link"
              >
                <span>View Code</span>
                <svg
                  className="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>


        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-container">
          <h2 className="heading">Get  in Touch</h2>
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            Feel free to reach out via the form below or through any of my social media channels. Let's connect and build something great together!
          </p>

          <div className="contact-wrapper">

            <form
              className="contact-form"
              action="https://submit-form.com/XPuIwsgLG"
              method="POST"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_redirect" value="https://sha1120.github.io/My-Portfolio/thank-you.html" />
              <button type="submit" className="submit-btn">SEND MESSAGE</button>
            </form>


            <div className="contact-icons">
              <a href="https://www.facebook.com/shashika.nishani.904?mibextid=ZbWKwL" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://youtube.com/@shashikanishani7434?si=zDmtuoCQ2bXAPKpj" target="_blank" rel="noreferrer"><FaYoutube /></a>
              <a href="https://wa.me/94706354670?text=Hello%20I%20visited%20your%20portfolio!" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
              <a href="https://www.linkedin.com/in/shashika-nishani-a55273278/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
