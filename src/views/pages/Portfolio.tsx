import AboutMe from "views/components/modules/AboutMe";
import Contact from "views/components/modules/Contact";
import Education from "views/components/modules/Education";
import Works from "views/components/modules/Works";
import Icon from "views/components/modules/Icon";
import Skills from "views/components/modules/Skills";
import useStyles from "style/style";
import Projects from "views/components/modules/Projects";

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div className={classes.portfolio}>
      <Icon />
      <AboutMe />
      <Skills />
      <Projects />
      <Works />
      <Education />
    </div>
  );
};

export default Portfolio;
