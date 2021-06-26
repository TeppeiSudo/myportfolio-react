import { Container, makeStyles, Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import WorkCard, { WorkCardType } from "../blocks/WorkCard";
import theme from "style/theme";

const useStyles = makeStyles({
  content: {
    minHeight: "50vh",
  },
  offset: theme.mixins.toolbar,
  link: {
    color: "#61dafb",
  },
  timeline: {
    textAlign: "left",
    marginLeft: "-40vh",
  },
})

const Works = () => {
  const classes = useStyles();
  const rakuten: WorkCardType = {
    name: "Rakuten Group Inc.",
    year: "2022.4~",
    depart: "Cloud Platform Department",
    position: "Web Application Engineer",
    details: "scheduled to join the company in 2022.4",
    link: "#",
  };
  const now: WorkCardType = {
    name: "Tokyo Institute of Technology",
    year: "Now~2022.3",
    depart: 'Electrical and Electronics',
    position: "Graduate Student",
    details: 'expected graduation in 2022.3',
    link: '#',
  }

  return (
    <Container maxWidth="lg" className={classes.content}>
      <div id="works" className={classes.offset} />
      <Typography variant="h3">work experience</Typography>
      <Timeline className={classes.timeline}>
        <WorkCard {...rakuten} />
      </Timeline>
    </Container>
  );
};

export default Works;
