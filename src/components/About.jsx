import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { CvButton, SocialContainer, SocialIcons } from "./Footer/FooterStyles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { cv } from "../assets";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Summary</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Frontend developer with nine years of proven experience. I create interactive web interfaces, SPA and
        work with complex apps, based on JS/TS and React/Redux. More than 22 completed working projects.
        Passionate about learning and development with a desire to apply new skills in workflow. Eager to tackle
        more complex problems and find ways to maximize user efficiency. Successfully worked on web solutions for
        AI technologies. Enjoy and have a great experience with team work with Scrum, Agile methodologies.
        Attentive to details, result oriented and self organized.
      </motion.p>

      <div className="mt-4 flex flex-wrap gap-2">
        <SocialContainer>
          <CvButton
            onClick={() => window.open(cv, "_blank")}
          >
            Download CV
          </CvButton>
          <SocialIcons href="https://github.com/andreasverzin">
            <AiFillGithub size="2rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/avfrontender">
            <AiFillLinkedin size="2rem" />
          </SocialIcons>
        </SocialContainer>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
