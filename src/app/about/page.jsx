import React from "react";
import styles from "./page.module.scss"
import Image from "next/image";
import AboutImage from "../../../public/about-bg.png"
import Button from "@/components/Button/Button";

const About = () => {
  return (
      <div className={styles.container}>
          <div className={styles.imageContainer}>
              <Image src={AboutImage} alt="" />
              <div className={styles.imageText}>
                  <h1>DUBYNA MARYNA</h1>
                  <h2>Front-end (React) Developer</h2>
              </div>
          </div>
          <div className={styles.aboutContainer}>
              <div>
                  <h3>About me</h3>
                  <p>Experienced Frontend React Developer with 1 year of expertise. Skilled in creating user-friendly web applications using React.js. <br/>Proficient in HTML, CSS, and JavaScript. Strong problem-solving and collaboration skills. <br/> Seeking new challenges to contribute and grow in the field of web development.</p>
              </div>
              <div className={styles.skillsContainer}>
                  <ul>
                      <h3>SKILLS:</h3>
                      <li>HTML5 / BEM</li>
                      <li>CSS3 / SASS / SCSS / Responsive / Flexbox / Grid</li>
                      <li>JavaScript / jQuery / AJAX / Typescript(basics)</li>
                      <li>NPM / Yarn / Webpack / Gulp</li>
                      <li>Git / GitLab / GitHub / Postman</li>
                  </ul>
                  <ul>
                      <h3>FRAMEWORKS:</h3>
                      <li>React.js (React Hooks, Redux, Redux Saga, Redux Toolkit, Axios, React Query, i18n)</li>
                      <li>Next.js</li>
                      <li>Vue 3 / Alpine.js</li>
                      <li>Laravel (Blades)</li>
                  </ul>
              </div>
              <div>
                  <ul>
                      <h3>LANGUAGES:</h3>
                      <li>English – Intermediate (B1)</li>
                      <li>Ukrainian – Native</li>
                  </ul>
              </div>
              <Button url="/contact" text="Contact me"/>
          </div>
      </div>
  )
}

export default About;