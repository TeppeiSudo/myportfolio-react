import AboutMe from "views/components/modules/AboutMe";
import Contact from "views/components/modules/Contact";
import Education from "views/components/modules/Education";
import Works from "views/components/modules/Works";
import Icon from "views/components/modules/Icon";
import Skills from "views/components/modules/Skills";
import Projects from "views/components/modules/Projects";
import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  portfolio: {
    color: grey[900],
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    textAlign: "center",
    marginTop: "100px",
    paddingTop: "100px",
  },
})

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div className={classes.portfolio}>
      <Icon />
      <Skills />
      <Projects />
      <Works />
      <Education />
    </div>
  );
};

export default Portfolio;
